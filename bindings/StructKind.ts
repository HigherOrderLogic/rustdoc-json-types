// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Id } from "./Id";

/**
 * The kind of a [`Struct`] and the data specific to it, i.e. fields.
 */
export type StructKind = "unit" | { "tuple": Array<Id | null> } | { "plain": { 
/**
 * The list of fields in the struct.
 *
 * All of the corresponding [`Item`]s are of kind [`ItemEnum::StructField`].
 */
fields: Array<Id>, 
/**
 * Whether any fields have been removed from the result, due to being private or hidden.
 */
has_stripped_fields: boolean, } };
