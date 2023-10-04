#[cfg(target_os = "windows")]
include!(concat!(env!("OUT_DIR"), "\\lib.rs"));

#[cfg(not(target_os = "windows"))]
include!(concat!(env!("OUT_DIR"), "/lib.rs"));