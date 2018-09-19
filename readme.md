# copie

[![npm](https://img.shields.io/npm/v/copie.svg?style=flat-square)](https://www.npmjs.com/package/copie) [![tests](https://img.shields.io/travis/deepsweet/copie/master.svg?label=tests&style=flat-square)](https://travis-ci.org/deepsweet/copie) [![coverage](https://img.shields.io/codecov/c/github/deepsweet/copie.svg?style=flat-square)](https://codecov.io/github/deepsweet/copie)

Copy a file.

* no CLI
* no globs
* no `mkdir -p`
* no side effects such as `stdout`
* Promise only API
* preserve `uid`, `gid`, `mode`, `atime` and `mtime` stats
* ESM

## Requirements

* Node.js >= 8.6.0

## Install

```sh
$ yarn add copie
# or
$ npm install copie
```

## Usage

```js
import copie from 'copie'

copie('/from/file/path', '/to/file/path')
  .then(() => console.log('done'))
  .catch(console.error)
```
