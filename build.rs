use std::{env, fs::File, io::Write, path::Path};

fn main() {
    let out_dir = env::var("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("lib.rs");
    let mut f = File::create(&dest_path).unwrap();

    let mut output = String::new();

    output.push_str(
        reqwest::blocking::get(
            "https://raw.githubusercontent.com/aDotInTheVoid/rustdoc-types/trunk/src/lib.rs",
        )
        .unwrap()
        .text()
        .unwrap()
        .as_str(),
    );

    output = output
        .replace("//!", "//")
        .replace("#[derive(", "#[derive(ts_rs::TS,")
        .replace("pub struct", "#[ts(export)] pub struct")
        .replace("pub enum", "#[ts(export)] pub enum")
        .replace("mod tests;", " mod tests {
    use std::{fs::File, io::Write, path::Path};
    use super::FORMAT_VERSION;

    #[test]
    fn export_format_version() {
        let dest_path = Path::new(\"./bindings\").join(\"__version.ts\");
        let mut f = File::create(&dest_path).unwrap();
        f.write_all(format!(\"export const FORMAT_VERSION = {}\", FORMAT_VERSION).as_bytes()).unwrap();
    }
}");

    f.write_all(output.as_bytes()).unwrap();
}
