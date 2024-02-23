/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.9.0.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as joke from "../joke.js";
import type * as replicate_joke from "../replicate_joke.js";
import type * as stories from "../stories.js";
import type * as together from "../together.js";
import type * as utils from "../utils.js";
import type * as whisper from "../whisper.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  joke: typeof joke;
  replicate_joke: typeof replicate_joke;
  stories: typeof stories;
  together: typeof together;
  utils: typeof utils;
  whisper: typeof whisper;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
