## Prerequisites

pnpm >= 10
VSCode with eslint extension

## Steps to Reproduce

> ⚠️Important: The bug depends on the orden in which file are opened, so please follow the instructions


1. Clone this repo and go into the project;s root directory
2. Install dependencies `pnpm install`
3. Open with VSCode `code .`
4. Open the file `packages/eslint/main.js`. This will trigger a first eslint load under this package context
5. Open `apps/app-1/App.vue` -> This will trigger the eslint load under `apps/app-1` context. Here, the aliased import of ComponentA triggers a `eslint(import-x/no-unresolved)`, but the ComponentB import works.
6. If you restart the eslint server while in this file, then the import will be detected correctly.

