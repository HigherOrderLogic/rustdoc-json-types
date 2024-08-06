// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

/**
 * The ABI (Application Binary Interface) used by a function.
 *
 * If a variant has an `unwind` field, this means the ABI that it represents can be specified in 2
 * ways: `extern "_"` and `extern "_-unwind"`, and a value of `true` for that field signifies the
 * latter variant.
 *
 * See the [Rustonomicon section](https://doc.rust-lang.org/nightly/nomicon/ffi.html#ffi-and-unwinding)
 * on unwinding for more info.
 */
export type Abi = "Rust" | { "C": { unwind: boolean, } } | { "Cdecl": { unwind: boolean, } } | { "Stdcall": { unwind: boolean, } } | { "Fastcall": { unwind: boolean, } } | { "Aapcs": { unwind: boolean, } } | { "Win64": { unwind: boolean, } } | { "SysV64": { unwind: boolean, } } | { "System": { unwind: boolean, } } | { "Other": string };
