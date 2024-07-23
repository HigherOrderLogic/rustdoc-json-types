import { readdirSync, open, write, unlink } from 'node:fs'
import { defineBuildConfig  } from 'unbuild'

export default defineBuildConfig({
    entries: ['./bindings'],
    declaration: true,
    hooks: {
        'build:prepare': (_) => {
            let content = ''
            
            for (const file of readdirSync('./bindings').filter(name => name !== 'index.ts')) {
                content += `export * from './${file.replace('.ts', '')}';\n`
            }

            open('./bindings/index.ts', 'w', (_, file) => {
                write(file, content, () => {})
            })
        }
    }
})