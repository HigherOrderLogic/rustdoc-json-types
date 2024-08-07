// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GenericBound } from "./GenericBound";
import type { Generics } from "./Generics";

/**
 * A trait alias declaration, e.g. `trait Int = Add + Sub + Mul + Div;`
 *
 * See [the tracking issue](https://github.com/rust-lang/rust/issues/41517)
 */
export type TraitAlias = { 
/**
 * Information about the type parameters and `where` clauses of the alias.
 */
generics: Generics, 
/**
 * The bounds that are associated with the alias.
 */
params: Array<GenericBound>, };
