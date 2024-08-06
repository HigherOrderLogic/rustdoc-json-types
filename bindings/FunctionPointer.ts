// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { FnDecl } from "./FnDecl";
import type { GenericParamDef } from "./GenericParamDef";
import type { Header } from "./Header";

/**
 * A type that is a function pointer.
 */
export type FunctionPointer = { 
/**
 * The signature of the function.
 */
decl: FnDecl, 
/**
 * Used for Higher-Rank Trait Bounds (HRTBs)
 *
 * ```ignore (incomplete expression)
 *    for<'c> fn(val: &'c i32) -> i32
 * // ^^^^^^^
 * ```
 */
generic_params: Array<GenericParamDef>, 
/**
 * The core properties of the function, such as the ABI it conforms to, whether it's unsafe, etc.
 */
header: Header, };
