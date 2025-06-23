# Using `require(esm)` with ESM loaders

## Problem 1: ESM loaders

cases | `require` | `import`
--- | --- | ---
CommonJS, legacy `require.extensions` | Y | N
CommonJS/ESM, `Module.register` | N | Y
CommonJS/ESM, `Module.registerHooks` | Y | Y

For an ESM file, it can be `import`-ed and transformed with an ESM loader
registered with `Module.register(loader)`.

However, this does not work with `require(esm)`. It only invokes sync ESM loaders,
registered with `Module.registerHooks(loader)`. `Module.registerHooks` is promising
but it is "1.1 Experimental, active development".

There is no way to tell if a loader is registered with `Module.register` as well. So
frameworks can not decide `import` or `require` based on if a loader is registered.

## Problem 2: ESM-only packages

cases | `require` | `import`
--- | --- | ---
ESM-only package | N | Y
CJS-only package | Y | N
Dual-export package | Y | Y
"module-sync" package | Y | Y

For packages with only `import` entrypoints in `package.json#exports`, `require(esm)`
can not be used to load. For frameworks, there is no way to uniformly load a package.
Vice-versa for `require` only entrypoint packages.

The available two options are:
1. Define dual-exports,
2. Define a "module-sync" entrypoint.

Non-dual package entrypoints:
- `@hyperse/ts-node/register`: ESM only
- `@swc-node/register/esm-register`: ESM only
- `@swc-node/register/register`: CJS only

