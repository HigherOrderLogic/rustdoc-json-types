// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GenericBound } from "./GenericBound";
import type { GenericParamDef } from "./GenericParamDef";
import type { Term } from "./Term";
import type { Type } from "./Type";

/**
 * One `where` clause.
 * ```rust
 * fn default<T>() -> T where T: Default { T::default() }
 * //                         ^^^^^^^^^^
 * ```
 */
export type WherePredicate = { "bound_predicate": { 
/**
 * The type that's being constrained.
 *
 * ```rust
 * fn f<T>(x: T) where for<'a> &'a T: Iterator {}
 * //                              ^
 * ```
 */
type: Type, 
/**
 * The set of bounds that constrain the type.
 *
 * ```rust
 * fn f<T>(x: T) where for<'a> &'a T: Iterator {}
 * //                                 ^^^^^^^^
 * ```
 */
bounds: Array<GenericBound>, 
/**
 * Used for Higher-Rank Trait Bounds (HRTBs)
 * ```rust
 * fn f<T>(x: T) where for<'a> &'a T: Iterator {}
 * //                  ^^^^^^^
 * ```
 */
generic_params: Array<GenericParamDef>, } } | { "lifetime_predicate": { 
/**
 * The name of the lifetime.
 */
lifetime: string, 
/**
 * The lifetimes that must be encompassed by the lifetime.
 */
outlives: Array<string>, } } | { "eq_predicate": { 
/**
 * The left side of the equation.
 */
lhs: Type, 
/**
 * The right side of the equation.
 */
rhs: Term, } };