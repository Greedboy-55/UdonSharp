"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[1784],{9910:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"release-1.1.5","metadata":{"permalink":"/news/release-1.1.5","source":"@site/news/releases/release-1.1.5.md","title":"Release 1.1.5","description":"Changelog","date":"2022-11-07T00:00:00.000Z","formattedDate":"November 7, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.1.5","title":"Release 1.1.5","date":"2022-11-07T00:00:00.000Z","authors":["merlin"],"tags":["release"],"draft":false},"nextItem":{"title":"Release 1.1.3","permalink":"/news/release-1.1.3"}},"content":"## Changelog\\n\\n- Fixes to allow sync on arrays of user defined enums\\n- Move refresh program assets menu to VRChat SDK > Udon Sharp menu for consistency\\n- Mitigate issues with UdonSharpProgramAsset cache havinbg problems when program assets are deleted\\n- More specific error in the case a program asset\'s script reference goes null"},{"id":"release-1.1.3","metadata":{"permalink":"/news/release-1.1.3","source":"@site/news/releases/release-1.1.3.md","title":"Release 1.1.3","description":"Changelog","date":"2022-10-27T00:00:00.000Z","formattedDate":"October 27, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.1.3","title":"Release 1.1.3","date":"2022-10-27T00:00:00.000Z","authors":["merlin"],"tags":["release"],"draft":false},"prevItem":{"title":"Release 1.1.5","permalink":"/news/release-1.1.5"},"nextItem":{"title":"Release 1.1.2","permalink":"/news/release-1.1.2"}},"content":"## Changelog\\n\\n- Fixes sync check to allow syncing user defined enums again, reported by techanon [#75](https://github.com/vrchat-community/UdonSharp/issues/75)\\n- Use explicit SyntaxTree reference in UdonSharpUpgrader to avoid compile issues with a Unity package that has a bad namespace declaration, reported by Vesturo"},{"id":"release-1.1.2","metadata":{"permalink":"/news/release-1.1.2","source":"@site/news/releases/release-1.1.2.md","title":"Release 1.1.2","description":"Changelog","date":"2022-10-24T00:00:00.000Z","formattedDate":"October 24, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":false,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-1.1.2","title":"Release 1.1.2","date":"2022-10-24T00:00:00.000Z","authors":["momo"],"tags":["release"],"draft":false},"prevItem":{"title":"Release 1.1.3","permalink":"/news/release-1.1.3"},"nextItem":{"title":"Release 1.1.1","permalink":"/news/release-1.1.1"}},"content":"## Changelog\\n\\n- Adds logging for what is not supported when hit in early compile phases.\\n- Fixes for inspector issues\\n- Make U# assembly definitions reset caches\\n- Create data locator after importing samples\\n- Fixes issue due to Udon Networking changes\\n- Adds sync type checking\\n- Updates Readme with VPM Usage Instructions"},{"id":"release-1.1.1","metadata":{"permalink":"/news/release-1.1.1","source":"@site/news/releases/release-1.1.1.md","title":"Release 1.1.1","description":"Changelog","date":"2022-08-26T00:00:00.000Z","formattedDate":"August 26, 2022","tags":[{"label":"release","permalink":"/news/tags/release"}],"truncated":false,"authors":[{"name":"Momo the Monster","title":"VRChat Developer","url":"https://github.com/momo-the-monster","imageURL":"https://github.com/momo-the-monster.png","key":"momo"}],"frontMatter":{"slug":"release-1.1.1","title":"Release 1.1.1","date":"2022-08-26T00:00:00.000Z","authors":["momo"],"tags":["release"],"draft":false},"prevItem":{"title":"Release 1.1.2","permalink":"/news/release-1.1.2"},"nextItem":{"title":"Release 1.0.0b12","permalink":"/news/release-1.0.0b12"}},"content":"## Changelog\\n- Fixes Locator to avoid spamming this Error on first project open: `Exception: Could not find UdonSharp locator, make sure you have installed U# following the install instructions.`\\n- Fixes file watcher breaking on non-Windows systems, contributed by anatawa12 (https://github.com/vrchat-community/UdonSharp/pull/47)"},{"id":"release-1.0.0b12","metadata":{"permalink":"/news/release-1.0.0b12","source":"@site/news/releases/release-1.0.0b12.md","title":"Release 1.0.0b12","description":"Changelog","date":"2022-04-01T00:00:00.000Z","formattedDate":"April 1, 2022","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b12","title":"Release 1.0.0b12","date":"2022-04-01T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.1.1","permalink":"/news/release-1.1.1"},"nextItem":{"title":"Release 1.0.0b11","permalink":"/news/release-1.0.0b11"}},"content":"## Changelog\\n- Make UdonBehaviourSyncMode attribute affect inherited classes, requested by @BocuD\\n- Add UDONSHARP scripting define to check for presence of U# in project\\n- Make upgrade process with scene open more robust\\n- Add handling for `GetComponent(s)<UdonSharpBehaviour>()` (the exact UdonSharpBehaviour type, types directly inherited from UdonSharpBehaviour were already handled)\\n- Add handling for `GetComponent(s)<T>()` on UdonSharpBehaviour types using inheritance\\n- Add workaround handling for `GetComponent(s)<T>()` on VRC component types\\n- Fix issue where generic methods could leak their type arguments to other uses with different type arguments\\n- Fix serialization on base class declared fields, reported by @kafeijao\\n- Add better error when declaring nested types"},{"id":"release-1.0.0b11","metadata":{"permalink":"/news/release-1.0.0b11","source":"@site/news/releases/release-1.0.0b11.md","title":"Release 1.0.0b11","description":"Changelog","date":"2022-03-23T00:00:00.000Z","formattedDate":"March 23, 2022","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b11","title":"Release 1.0.0b11","date":"2022-03-23T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b12","permalink":"/news/release-1.0.0b12"},"nextItem":{"title":"Release 1.0.0b10","permalink":"/news/release-1.0.0b10"}},"content":"## Changelog\\n- Improve exposure tree scan speed a little\\n- Make GetUdonSharpComponent APIs just act like Unity equivalents instead of potentially erroring\\n- Add fallback drawing for jagged arrays\\n- Fix issue with local symbols getting incorrectly shared between different generic method type arguments, reported by @Miner28_3\\n- Fix U# behaviour enabled state not getting synced in the editor UI while in play mode properly, reported by @Fairplex\\n- Prevent editing script asset on UdonSharpProgramAssets once it has been set since it will not work now. Also add validation for out of sync assigned script types.\\n- Missing source script warning is now an error\\n- Obsolete and no-op UpdateProxy and ApplyProxyModifications editor API calls since they aren\'t needed in editor-time now and could cause issues with the new way of doing things.\\n- Fix multiply operation * on System.Decimal type, reported by @pnivek\\n- Fix integer -> user enum conversions when the underlying integer types don\'t match, reported by @GlitchyDev\\n- Fix script upgrader more, reported by @Phasedragon\\n- Make file change detection extend to all scripts that are linked by U# builds\\n- Fix AddUdonSharpComponent editor scripting APIs as they weren\'t actually working, reported by @BocuD\\n- Move UdonSharp menu items to be under the VRChat SDK top level menu"},{"id":"release-1.0.0b10","metadata":{"permalink":"/news/release-1.0.0b10","source":"@site/news/releases/release-1.0.0b10.md","title":"Release 1.0.0b10","description":"Changelog","date":"2022-03-14T00:00:00.000Z","formattedDate":"March 14, 2022","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b10","title":"Release 1.0.0b10","date":"2022-03-14T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b11","permalink":"/news/release-1.0.0b11"},"nextItem":{"title":"Release 1.0.0b9","permalink":"/news/release-1.0.0b9"}},"content":"## Changelog\\n- Fix script upgrade causing duplication of code in some cases reported by @Narry\\n- Add support for serializing auto property backing fields\\n- Mitigate dropdowns having incorrect margins, contributed by @ArchiTechAnon\\n- Obsolete DrawPublicVariables U# API method and replace with DrawVariables\\n- Fix unary plus operator causing compile errors\\n- Make force upgrade button also queue prefab upgrade\\n- Fix Odin conflicting with U# inspectors, reported by @GlitchyDev and @BocuD\\n- Fix default editor fallbacks\\n- Fix multi-edit not being disabled on custom inspectors that do not support it\\n- Add handling for custom editors that edit child classes\\n- Re-add exposure tree"},{"id":"release-1.0.0b9","metadata":{"permalink":"/news/release-1.0.0b9","source":"@site/news/releases/release-1.0.0b9.md","title":"Release 1.0.0b9","description":"Changelog","date":"2022-03-04T00:00:00.000Z","formattedDate":"March 4, 2022","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b9","title":"Release 1.0.0b9","date":"2022-03-04T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b10","permalink":"/news/release-1.0.0b10"},"nextItem":{"title":"Release 1.0.0b8","permalink":"/news/release-1.0.0b8"}},"content":"## Changelog\\n- Switch to using Unity C# scripts to store U# script data which has the following benefits for U# behaviours:\\n  - Support for prefab scene deltas\\n  - Support for prefab nesting\\n  - Support for prefab variants\\n  - Multi-edit support\\n  - Editor script dirtying behavior makes more sense\\n  - Custom inspectors and editor scripting now work on prefab assets properly\\n- Add upgrade path for converting old projects to new data format\\n  - Does not support upgrading nested prefabs and prefab variants since they were not supported prior to 1.0.0b9\\n- Improvements to assembly reload performance\\n- Inspector enum support\\n- Fixes for struct value write back, reported by @Hai and @Jordo\\n- Add InteractionText property to UdonSharpBehaviours\\n- Fixes for some methods not being found ex System.Type.Name, contributed by @bd_\\n- Remove redundant COW value dirty on this, contributed by @bd_\\n- Catch unhandled exceptions from compiler and rethrow them as unhandled exceptions to avoid Tasks silencing exceptions\\n- Fix double brackets not being unexcaped on interpolated strings that weren\'t preforming any interpolation, contributed by @ureishi\\n- \'Expected\' exceptions used to interrupt compilation now do not dump entire callstack to debug log\\n- Enable runtime exception watching by default\\n- Add checks for Unity C# compile errors before initiating a U# compile to avoid confusion\\n- Add more validation for invalid uses of program assets and script files\\n- Remove redundant script dirty ignore since it seems like something else was causing the dirtying and is no longer doing it\\n- Obsolete many editor APIs for editor scripting that are no longer needed\\n- Obsolete old overloads for station and player join events -- now throws compile error"},{"id":"release-1.0.0b8","metadata":{"permalink":"/news/release-1.0.0b8","source":"@site/news/releases/release-1.0.0b8.md","title":"Release 1.0.0b8","description":"Changelog","date":"2021-09-28T00:00:00.000Z","formattedDate":"September 28, 2021","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b8","title":"Release 1.0.0b8","date":"2021-09-28T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b9","permalink":"/news/release-1.0.0b9"},"nextItem":{"title":"Release 1.0.0b7","permalink":"/news/release-1.0.0b7"}},"content":"## Changelog\\n- Fix missing null check that could cause method redirects to error in some cases, reported by @Ha\xef~"},{"id":"release-1.0.0b7","metadata":{"permalink":"/news/release-1.0.0b7","source":"@site/news/releases/release-1.0.0b7.md","title":"Release 1.0.0b7","description":"Changelog","date":"2021-09-27T00:00:00.000Z","formattedDate":"September 27, 2021","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b7","title":"Release 1.0.0b7","date":"2021-09-27T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b8","permalink":"/news/release-1.0.0b8"},"nextItem":{"title":"Release 1.0.0b5","permalink":"/news/release-1.0.0b5"}},"content":"## Changelog\\n- Add handling for enum variable serialization\\n- Add generic method/UdonSharpBehaviour type support\\n- Add handling for IComparible on generic methods\\n- Fix using .enabled on `GetComponent<UserType>()` results, reported by @Miner28_3 and @Pema99"},{"id":"release-1.0.0b5","metadata":{"permalink":"/news/release-1.0.0b5","source":"@site/news/releases/release-1.0.0b5.md","title":"Release 1.0.0b5","description":"Changelog","date":"2021-09-22T00:00:00.000Z","formattedDate":"September 22, 2021","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b5","title":"Release 1.0.0b5","date":"2021-09-22T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b7","permalink":"/news/release-1.0.0b7"},"nextItem":{"title":"Release 1.0.0b6","permalink":"/news/release-1.0.0b6"}},"content":"## Changelog\\n- Fix string compound addition with const character values, reported by @Pema99\\n- Fix covariant conversion of params arrays on reference type values, reported by @Ha\xef~\\n- Fix issues with virtual method linkage allocations, reported by @Ha\xef~\\n- Add checking for cases where base methods are shadowed by inherited methods, reported by @GlitchyDev\\n- Add checking for cases where base fields are shadowed by fields in inherited classes\\n- Add checking for abstract U# classes having a U# program asset associated with them, reported by @GlitchyDev\\n- Add fix for abstract methods causing the compiler to fail\\n- Add validation to make sure people aren\'t inheriting from interfaces since they will have support added in the coming weeks\\n- Add handling for using switch on object condition values, reported by @Pema99\\n- Add handling for empty statements, reported by @Pema99\\n- Add validation for the class name of U# behaviours mismatching their containing .cs file name since Unity breaks in dumb ways when it\'s not the same"},{"id":"release-1.0.0b6","metadata":{"permalink":"/news/release-1.0.0b6","source":"@site/news/releases/release-1.0.0b6.md","title":"Release 1.0.0b6","description":"Changelog","date":"2021-09-22T00:00:00.000Z","formattedDate":"September 22, 2021","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b6","title":"Release 1.0.0b6","date":"2021-09-22T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b5","permalink":"/news/release-1.0.0b5"},"nextItem":{"title":"Release 1.0.0b4","permalink":"/news/release-1.0.0b4"}},"content":"## Changelog\\n- Fix more issues with params, reported by @Ha\xef~\\n- Fix issues with static methods on U# behaviours causing naming conflicts, reported by @Ha\xef~"},{"id":"release-1.0.0b4","metadata":{"permalink":"/news/release-1.0.0b4","source":"@site/news/releases/release-1.0.0b4.md","title":"Release 1.0.0b4","description":"Changelog","date":"2021-09-20T00:00:00.000Z","formattedDate":"September 20, 2021","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b4","title":"Release 1.0.0b4","date":"2021-09-20T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b6","permalink":"/news/release-1.0.0b6"},"nextItem":{"title":"Release 1.0.0b2","permalink":"/news/release-1.0.0b2"}},"content":"## Changelog\\n- Add @bd_\'s optimization for bitwise not operator\\n- Fix assembly finding handling causing issues with some 3rd party assets, reported by @Ha\xef~\\n- Add blacklist entry for CyanEmu since it needs to reference some VRC scripts which U# doesn\'t link, reported by @Ha\xef~ and @Miner28_3\\n- Fix calls to ToString() on enums, reported by @Miner28_3 and @Ha\xef~\\n- Fix calls to `GetComponents<T>` not returning an array type internally, reported by @Miner28_3\\n- Fix calls to VRC methods with inconsistent return types in their signature such as VRCPlayerApi.GetPickupInHand(), reported by @Ha\xef~"},{"id":"release-1.0.0b2","metadata":{"permalink":"/news/release-1.0.0b2","source":"@site/news/releases/release-1.0.0b2.md","title":"Release 1.0.0b2","description":"Changelog","date":"2021-09-19T00:00:00.000Z","formattedDate":"September 19, 2021","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b2","title":"Release 1.0.0b2","date":"2021-09-19T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b4","permalink":"/news/release-1.0.0b4"},"nextItem":{"title":"Release 1.0.0b3","permalink":"/news/release-1.0.0b3"}},"content":"## Changelog\\n- Fix compile error when base System.Object methods such as ToString() are overridden, reported by @GlitchyDev"},{"id":"release-1.0.0b3","metadata":{"permalink":"/news/release-1.0.0b3","source":"@site/news/releases/release-1.0.0b3.md","title":"Release 1.0.0b3","description":"Changelog","date":"2021-09-19T00:00:00.000Z","formattedDate":"September 19, 2021","tags":[{"label":"release beta","permalink":"/news/tags/release-beta"}],"truncated":false,"authors":[{"name":"Merlin","title":"VRChat Developer","url":"https://github.com/merlinvr","imageURL":"https://github.com/merlinvr.png","key":"merlin"}],"frontMatter":{"slug":"release-1.0.0b3","title":"Release 1.0.0b3","date":"2021-09-19T00:00:00.000Z","authors":["merlin"],"tags":["release beta"]},"prevItem":{"title":"Release 1.0.0b2","permalink":"/news/release-1.0.0b2"}},"content":"## Changelog\\n- Fix increment/decrement/compound assignment operators not converting numeric types of lower precision than int in some cases like on user defined properties, reported by @GlitchyDev\\n- Fix compile error when using static methods defined in other U# behaviours, reported by @GlitchyDev\\n- Add errors for when people attempt to use U# scripts that do not belong to a U# assembly, but are part of a C# assembly\\n- Optimize string interpolations and fix potential issues when using string interpolations in recursive methods"}]}')}}]);