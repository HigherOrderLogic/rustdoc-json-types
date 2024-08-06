// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ItemKind } from "./ItemKind";

/**
 * Information about an external (not defined in the local crate) [`Item`].
 *
 * For external items, you don't get the same level of
 * information. This struct should contain enough to generate a link/reference to the item in
 * question, or can be used by a tool that takes the json output of multiple crates to find
 * the actual item definition with all the relevant info.
 */
export type ItemSummary = { 
/**
 * Can be used to look up the name and html_root_url of the crate this item came from in the
 * `external_crates` map.
 */
crate_id: number, 
/**
 * The list of path components for the fully qualified path of this item (e.g.
 * `["std", "io", "lazy", "Lazy"]` for `std::io::lazy::Lazy`).
 *
 * Note that items can appear in multiple paths, and the one chosen is implementation
 * defined. Currently, this is the full path to where the item was defined. Eg
 * [`String`] is currently `["alloc", "string", "String"]` and [`HashMap`][`std::collections::HashMap`]
 * is `["std", "collections", "hash", "map", "HashMap"]`, but this is subject to change.
 */
path: Array<string>, 
/**
 * Whether this item is a struct, trait, macro, etc.
 */
kind: ItemKind, };
