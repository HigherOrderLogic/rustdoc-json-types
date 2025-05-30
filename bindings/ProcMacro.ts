// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MacroKind } from "./MacroKind";

/**
 * A procedural macro.
 */
export type ProcMacro = { 
/**
 * How this macro is supposed to be called: `foo!()`, `#[foo]` or `#[derive(foo)]`
 */
kind: MacroKind, 
/**
 * Helper attributes defined by a macro to be used inside it.
 *
 * Defined only for derive macros.
 *
 * E.g. the [`Default`] derive macro defines a `#[default]` helper attribute so that one can
 * do:
 *
 * ```rust
 * #[derive(Default)]
 * enum Option<T> {
 *     #[default]
 *     None,
 *     Some(T),
 * }
 * ```
 */
helpers: Array<string>, };
