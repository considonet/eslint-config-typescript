# @considonet/eslint-config-typescript

> Default ESLint config for ConsidoNet projects using JS, TS and React

## What is this?

This config was created to provide a common linting setup for ConsidoNet projects. This config works well with ES6 JavaScript, [TypeScript](https://github.com/typescript-eslint/typescript-eslint) and React (JSX, TSX) files.

You can read more about transition from `tslint` to `eslint` [here](https://eslint.org/blog/2019/01/future-typescript-eslint).

## Installation

Using npm:

```sh
npm install --save-dev @considonet/eslint-config-typescript
```

or using yarn:

```sh
yarn add @considonet/eslint-config-typescript --dev
```

## Usage

In your .eslintrc file add the following line:

```
extends: "@considonet/eslint-config-typescript"
```

__Make sure to have tsconfig.json file in your project root directory (where package.json is).__ Otherwise this config won't work.
