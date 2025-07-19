use std::{cell::LazyCell, env, fs::File, io::Write, path::Path};

use regex::{Regex, RegexBuilder, Captures};

const DERIVE_RE: LazyCell<Regex> = LazyCell::new(|| {
    RegexBuilder::new(r#"^\s*#\[derive\((?<content>.+)\)\]"#)
        .multi_line(true)
        .build()
        .unwrap()
});
const PUB_MEMBER_RE: LazyCell<Regex> = LazyCell::new(|| {
    RegexBuilder::new(r#"^\s*pub\s+(struct|enum)"#)
        .multi_line(true)
        .build()
        .unwrap()
});

fn main() {
    let out_dir = env::var("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("lib.rs");
    let mut f = File::create(&dest_path).unwrap();

    let mut output = String::new();

    output.push_str(
        reqwest::blocking::get(
            "https://raw.githubusercontent.com/rust-lang/rustdoc-types/trunk/src/lib.rs",
        )
        .unwrap()
        .text()
        .unwrap()
        .as_str(),
    );

    output = output.replace("serde_derive", "serde");

    output = DERIVE_RE.replace_all(&output, |caps: &Captures| {
        let derive_content = caps.name("content").unwrap().as_str();
        format!("#[derive(ts_rs::TS, {})]", derive_content)
    }).to_string();

    output = PUB_MEMBER_RE.replace_all(&output, |caps: &Captures| {
        let pub_member = caps.get(0).unwrap().as_str();
        format!("#[ts(export)]\n{}", pub_member)
    }).to_string();

    output = output
        .replace("//!", "//")
        .replace("mod tests;", "
mod tests {
    use std::{fs::File, io::Write, path::Path};
    use super::FORMAT_VERSION;

    #[test]
    fn export_format_version() {
        let dest_path = Path::new(\"./bindings\").join(\"__version__.ts\");
        let mut f = File::create(&dest_path).expect(\"failed to create file\");
        f.write_all(format!(\"export const FORMAT_VERSION = {}\", FORMAT_VERSION).as_bytes()).expect(\"failed to write to file\");
    }
}");

    f.write_all(output.as_bytes()).unwrap();
}
