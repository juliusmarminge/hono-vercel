# Problems:

- `vc dev` fails to compile the function cause it's unable to resolve workspace dependencies:
  ![CleanShot 2024-04-29 at 12 26 26@2x](https://github.com/juliusmarminge/hono-vercel/assets/51714798/bea7c0b9-db92-4fea-8f85-2dc789828159)

- `vc build` reports type errors for dependencies that have declaration statements in them. For example the `.openapi()` function on the zod schemas aren't recognized as valid, even though they're [added by `@asteasolutions/zod-to-openapi`](https://github.com/asteasolutions/zod-to-openapi/blob/master/src/zod-extensions.ts#L37-L58) (dependency of `@hono/zod-openapi`):
  ![CleanShot 2024-04-29 at 12 26 35@2x](https://github.com/juliusmarminge/hono-vercel/assets/51714798/b257c615-f6e6-41a2-9235-b27e2088efe4)

- `vc build` outputs `.js` files with `cjs` format, even though the `package.json#type` is set to `module`. This causes `ReferenceError: exports is not defined` when the function is invoked:
  ![CleanShot 2024-04-29 at 12 27 48@2x](https://github.com/juliusmarminge/hono-vercel/assets/51714798/f6dc27ca-8828-4ca8-8bd5-ee5d83af9acc)

- `vc build` output references to files that doesn't exist? In the `.vc-config.json` file there's a reference to `packages/validators/node_modules/@hono/zod-openapi` but that doesn't exist in the built output:
  ![CleanShot 2024-04-29 at 12 35 54@2x](https://github.com/juliusmarminge/hono-vercel/assets/51714798/8bd5ced6-6a17-4136-8f4c-19c3e9bab8ed)
