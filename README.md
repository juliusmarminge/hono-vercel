# Problems:

- `vc dev` fails to compile the function cause it's unable to resolve workspace dependencies:
  ![CleanShot 2024-04-29 at 12 26 26@2x](https://github.com/juliusmarminge/hono-vercel/assets/51714798/bea7c0b9-db92-4fea-8f85-2dc789828159)

- `vc build` reports type errors for dependencies that have declaration statements in them. For example the `.openapi()` function on the zod schemas aren't recognized as valid, even though they're added by `@asteasolutions/zod-to-openapi` (dependency of `@hono/zod-openapi`):
  ![CleanShot 2024-04-29 at 12 26 35@2x](https://github.com/juliusmarminge/hono-vercel/assets/51714798/b257c615-f6e6-41a2-9235-b27e2088efe4)

- `vc build` outputs `.js` files with `cjs` format, even though the `package.json#type` is set to `module`. This causes `ReferenceError: exports is not defined` when the function is invoked:
  ![image](https://github.com/juliusmarminge/hono-vercel/assets/51714798/6c0d3864-26bb-466b-86b4-4ba6b12c78d9)
