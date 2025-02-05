// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Constant } from "./Constant";
import type { Enum } from "./Enum";
import type { Function } from "./Function";
import type { GenericBound } from "./GenericBound";
import type { Generics } from "./Generics";
import type { Impl } from "./Impl";
import type { Module } from "./Module";
import type { Primitive } from "./Primitive";
import type { ProcMacro } from "./ProcMacro";
import type { Static } from "./Static";
import type { Struct } from "./Struct";
import type { Trait } from "./Trait";
import type { TraitAlias } from "./TraitAlias";
import type { Type } from "./Type";
import type { TypeAlias } from "./TypeAlias";
import type { Union } from "./Union";
import type { Use } from "./Use";
import type { Variant } from "./Variant";

/**
 * Specific fields of an item.
 *
 * Part of [`Item`].
 */
export type ItemEnum = { "module": Module } | { "extern_crate": { 
/**
 * The name of the imported crate.
 */
name: string, 
/**
 * If the crate is renamed, this is its name in the crate.
 */
rename: string | null, } } | { "use": Use } | { "union": Union } | { "struct": Struct } | { "struct_field": Type } | { "enum": Enum } | { "variant": Variant } | { "function": Function } | { "trait": Trait } | { "trait_alias": TraitAlias } | { "impl": Impl } | { "type_alias": TypeAlias } | { "constant": { 
/**
 * The type of the constant.
 */
type: Type, 
/**
 * The declared constant itself.
 */
const: Constant, } } | { "static": Static } | "extern_type" | { "macro": string } | { "proc_macro": ProcMacro } | { "primitive": Primitive } | { "assoc_const": { 
/**
 * The type of the constant.
 */
type: Type, 
/**
 * Inside a trait declaration, this is the default value for the associated constant,
 * if provided.
 * Inside an `impl` block, this is the value assigned to the associated constant,
 * and will always be present.
 *
 * The representation is implementation-defined and not guaranteed to be representative of
 * either the resulting value or of the source code.
 *
 * ```rust
 * const X: usize = 640 * 1024;
 * //               ^^^^^^^^^^
 * ```
 */
value: string | null, } } | { "assoc_type": { 
/**
 * The generic parameters and where clauses on ahis associated type.
 */
generics: Generics, 
/**
 * The bounds for this associated type. e.g.
 * ```rust
 * trait IntoIterator {
 *     type Item;
 *     type IntoIter: Iterator<Item = Self::Item>;
 * //                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * }
 * ```
 */
bounds: Array<GenericBound>, 
/**
 * Inside a trait declaration, this is the default for the associated type, if provided.
 * Inside an impl block, this is the type assigned to the associated type, and will always
 * be present.
 *
 * ```rust
 * type X = usize;
 * //       ^^^^^
 * ```
 */
type: Type | null, } };
