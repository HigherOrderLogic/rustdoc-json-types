// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ExternalCrate } from "./ExternalCrate";
import type { Id } from "./Id";
import type { Item } from "./Item";
import type { ItemSummary } from "./ItemSummary";
import type { Target } from "./Target";

/**
 * The root of the emitted JSON blob.
 *
 * It contains all type/documentation information
 * about the language items in the local crate, as well as info about external items to allow
 * tools to find or link to them.
 */
export type Crate = { 
/**
 * The id of the root [`Module`] item of the local crate.
 */
root: Id, 
/**
 * The version string given to `--crate-version`, if any.
 */
crate_version: string | null, 
/**
 * Whether or not the output includes private items.
 */
includes_private: boolean, 
/**
 * A collection of all items in the local crate as well as some external traits and their
 * items that are referenced locally.
 */
index: { [key in Id]?: Item }, 
/**
 * Maps IDs to fully qualified paths and other info helpful for generating links.
 */
paths: { [key in Id]?: ItemSummary }, 
/**
 * Maps `crate_id` of items to a crate name and html_root_url if it exists.
 */
external_crates: { [key in number]?: ExternalCrate }, 
/**
 * Information about the target for which this documentation was generated
 */
target: Target, 
/**
 * A single version number to be used in the future when making backwards incompatible changes
 * to the JSON output.
 */
format_version: number, };
