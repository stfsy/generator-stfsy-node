# Node module generator

[![Build Status](https://travis-ci.org/stfsy/generator-stfsy-node.svg)](https://travis-ci.org/stfsy/generator-stfsy-node)
[![Dependency Status](https://img.shields.io/david/stfsy/generator-stfsy-node.svg)](https://github.com/stfsy/generator-stfsy-node/blob/master/package.json)
[![DevDependency Status](https://img.shields.io/david/dev/stfsy/generator-stfsy-node.svg)](https://github.com/stfsy/generator-stfsy-node/blob/master/package.json)
[![Npm downloads](https://img.shields.io/npm/dm/generator-stfsy-node.svg)](https://www.npmjs.com/package/generator-stfsy-node)
[![Npm Version](https://img.shields.io/npm/v/generator-stfsy-node.svg)](https://www.npmjs.com/package/generator-stfsy-node)
[![Git tag](https://img.shields.io/github/tag/stfsy/generator-stfsy-node.svg)](https://github.com/stfsy/generator-stfsy-node/releases)
[![Github issues](https://img.shields.io/github/issues/stfsy/generator-stfsy-node.svg)](https://github.com/stfsy/generator-stfsy-node/issues)
[![License](https://img.shields.io/npm/l/generator-stfsy-node.svg)](https://github.com/stfsy/generator-stfsy-node/blob/master/LICENSE)

A generator for plain node modules with test, ci, release and documentation workflows

## Includes
The generated project comes with:
* Changelog Configuration
* Istanbul Code Coverage Configuration
* JsDoc Configuration
* Mocha Test Configuration
* Travis CI Configuration

## Generates
The generated project has the following the structure:
```
| lib
|  | index.js 
| test
|  | index.spec.js
| .gitignore
| .jsdoc.json
| .travis.yml
| LICENSE
| README.md
| package.json
```
## Scripts
The generated project is preconfigured with the following scripts:
* **changelog** _to generate the changelog for the current version_
* **coverage** _to generate the code coverage for a test run_
* **docs** _to generate jsdoc application code_
* **release-patch** _to release a new patch version to github_
    * calls version, test and changelog
* **release-minor** _to release a new minor version to github_
    * calls version, test and changelog
* **release-major** _to release a new major version to github_
    * calls version, test and changelog
* **setup** _to onetime setup the github repository with an initial tag_
* **test** _to run tests a single time_
* **test-watch** _to watch for file changes and run tests_

## Installation
```
npm install generator-stfsy-node -g
```

## Usage
```
cd <workspace>
mkdir <projectName>
cd <projectName>
yo stfsy-node
```

Run **npm run setup** afterwards to setup your git repository with an empty tag. This is needed for the generation of your first changelog. 

## License

This project is distributed under the MIT license.