// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Type } from "./Type";

/**
 * A `static` declaration.
 */
export type Static = { 
/**
 * The type of the static.
 */
type: Type, 
/**
 * This is `true` for mutable statics, declared as `static mut X: T = f();`
 */
is_mutable: boolean, 
/**
 * The stringified expression for the initial value.
 *
 * It's not guaranteed that it'll match the actual source code for the initial value.
 */
expr: string, };
