// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Id } from "./Id";

export type Visibility = "public" | "default" | "crate" | { "restricted": { parent: Id, path: string, } };
