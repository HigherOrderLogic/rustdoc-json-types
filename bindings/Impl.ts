// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Generics } from "./Generics";
import type { Id } from "./Id";
import type { Path } from "./Path";
import type { Type } from "./Type";

/**
 * An `impl` block.
 */
export type Impl = { 
/**
 * Whether this impl is for an unsafe trait.
 */
is_unsafe: boolean, 
/**
 * Information about the impl’s type parameters and `where` clauses.
 */
generics: Generics, 
/**
 * The list of the names of all the trait methods that weren't mentioned in this impl but
 * were provided by the trait itself.
 *
 * For example, for this impl of the [`PartialEq`] trait:
 * ```rust
 * struct Foo;
 *
 * impl PartialEq for Foo {
 *     fn eq(&self, other: &Self) -> bool { todo!() }
 * }
 * ```
 * This field will be `["ne"]`, as it has a default implementation defined for it.
 */
provided_trait_methods: Array<string>, 
/**
 * The trait being implemented or `None` if the impl is inherent, which means
 * `impl Struct {}` as opposed to `impl Trait for Struct {}`.
 */
trait: Path | null, 
/**
 * The type that the impl block is for.
 */
for: Type, 
/**
 * The list of associated items contained in this impl block.
 */
items: Array<Id>, 
/**
 * Whether this is a negative impl (e.g. `!Sized` or `!Send`).
 */
is_negative: boolean, 
/**
 * Whether this is an impl that’s implied by the compiler
 * (for autotraits, e.g. `Send` or `Sync`).
 */
is_synthetic: boolean, blanket_impl: Type | null, };
