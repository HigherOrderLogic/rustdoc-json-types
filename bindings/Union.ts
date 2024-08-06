// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Generics } from "./Generics";
import type { Id } from "./Id";

/**
 * A `union`.
 */
export type Union = { 
/**
 * The generic parameters and where clauses on this union.
 */
generics: Generics, 
/**
 * Whether any fields have been removed from the result, due to being private or hidden.
 */
fields_stripped: boolean, 
/**
 * The list of fields in the union.
 *
 * All of the corresponding [`Item`]s are of kind [`ItemEnum::StructField`].
 */
fields: Array<Id>, 
/**
 * All impls (both of traits and inherent) for this union.
 *
 * All of the corresponding [`Item`]s are of kind [`ItemEnum::Impl`].
 */
impls: Array<Id>, };
