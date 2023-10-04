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
        .replace("#[cfg(test)]", "")
        .replace("mod tests;", "");

    f.write_all(output.as_bytes()).unwrap();
}
