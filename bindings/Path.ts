// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GenericArgs } from "./GenericArgs";
import type { Id } from "./Id";

export type Path = { name: string, id: Id, 
/**
 * Generic arguments to the type
 * ```test
 * std::borrow::Cow<'static, str>
 *                 ^^^^^^^^^^^^^^
 *                 |
 *                 this part
 * ```
 */
args: GenericArgs | null, };
