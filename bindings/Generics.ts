// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GenericParamDef } from "./GenericParamDef";
import type { WherePredicate } from "./WherePredicate";

/**
 * Generic parameters accepted by an item and `where` clauses imposed on it and the parameters.
 */
export type Generics = { 
/**
 * A list of generic parameter definitions (e.g. `<T: Clone + Hash, U: Copy>`).
 */
params: Array<GenericParamDef>, 
/**
 * A list of where predicates (e.g. `where T: Iterator, T::Item: Copy`).
 */
where_predicates: Array<WherePredicate>, };
