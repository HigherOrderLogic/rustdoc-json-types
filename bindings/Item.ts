// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Deprecation } from "./Deprecation";
import type { Id } from "./Id";
import type { ItemEnum } from "./ItemEnum";
import type { Span } from "./Span";
import type { Visibility } from "./Visibility";

/**
 * Anything that can hold documentation - modules, structs, enums, functions, traits, etc.
 *
 * The `Item` data type holds fields that can apply to any of these,
 * and leaves kind-specific details (like function args or enum variants) to the `inner` field.
 */
export type Item = { 
/**
 * The unique identifier of this item. Can be used to find this item in various mappings.
 */
id: Id, 
/**
 * This can be used as a key to the `external_crates` map of [`Crate`] to see which crate
 * this item came from.
 */
crate_id: number, 
/**
 * Some items such as impls don't have names.
 */
name: string | null, 
/**
 * The source location of this item (absent if it came from a macro expansion or inline
 * assembly).
 */
span: Span | null, 
/**
 * By default all documented items are public, but you can tell rustdoc to output private items
 * so this field is needed to differentiate.
 */
visibility: Visibility, 
/**
 * The full markdown docstring of this item. Absent if there is no documentation at all,
 * Some("") if there is some documentation but it is empty (EG `#[doc = ""]`).
 */
docs: string | null, 
/**
 * This mapping resolves [intra-doc links](https://github.com/rust-lang/rfcs/blob/master/text/1946-intra-rustdoc-links.md) from the docstring to their IDs
 */
links: { [key: string]: Id }, 
/**
 * Stringified versions of the attributes on this item (e.g. `"#[inline]"`)
 */
attrs: Array<string>, 
/**
 * Information about the item’s deprecation, if present.
 */
deprecation: Deprecation | null, 
/**
 * The type-specific fields describing this item.
 */
inner: ItemEnum, };