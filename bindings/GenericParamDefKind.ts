// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GenericBound } from "./GenericBound";
import type { Type } from "./Type";

export type GenericParamDefKind = { "lifetime": { outlives: Array<string>, } } | { "type": { bounds: Array<GenericBound>, default: Type | null, 
/**
 * This is normally `false`, which means that this generic parameter is
 * declared in the Rust source text.
 *
 * If it is `true`, this generic parameter has been introduced by the
 * compiler behind the scenes.
 *
 * # Example
 *
 * Consider
 *
 * ```ignore (pseudo-rust)
 * pub fn f(_: impl Trait) {}
 * ```
 *
 * The compiler will transform this behind the scenes to
 *
 * ```ignore (pseudo-rust)
 * pub fn f<impl Trait: Trait>(_: impl Trait) {}
 * ```
 *
 * In this example, the generic parameter named `impl Trait` (and which
 * is bound by `Trait`) is synthetic, because it was not originally in
 * the Rust source text.
 */
synthetic: boolean, } } | { "const": { type: Type, default: string | null, } };
