import { readdirSync, open, write, unlink } from 'node:fs'
import { defineBuildConfig  } from 'unbuild'

export default defineBuildConfig({
    entries: ["./bindings"],
    declaration: true,
    hooks: {
        "build:prepare": (_) => {
            let content = ""
            
            for (const file of readdirSync('./bindings')) {
                let typeName = file.replace('.ts', '')
                content += `export type { ${typeName} } from './${typeName}';\n`
            }

            open('./bindings/index.ts', 'w', (_, file) => {
                write(file, content, () => {})
            })
        },
        "build:done": (_) => {
            unlink('./bindings/index.ts', () => {})
        }
    }
})