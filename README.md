# @considonet/eslint-config-typescript

> Default ESLint config for ConsidoNet projects using JS, TS and React

## What is this?

This preset was created as a part of [G-Build](https://www.npmjs.com/package/@considonet/g-build) evolution. Starting from version 4.0, there are no longer configuration files for Babel and these have to be provided manually (as they are project-specific). Because all our existing legacy projects have exactly the same config, this package makes the transition to G-Build 4 and Babel TypeScript transpilation easy. Also it provides a setup which was proved to work for us.

## Install

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
