# commitlint-go-npm

commitlint checks if your commit messages meets the conventional commit format

> **npm** integration for [commitlint-go](https://github.com/conventionalcommit/commitlint) without any overhead so using full power of `commitlint-go` CLI performance and feature

## Documentations

Look at [official documentation](https://github.com/conventionalcommit/commitlint)

## Motivation

> This package is specifically designed for direct Command-Line Interface (CLI) interaction or as an extension for Visual Studio Code.

### The functionality for npx or bunx is not included and is not anticipated to be incorporated in the future

## How this is fast?

This project leverages the [binary2npm](https://github.com/dalisoft/binary2npm) utility to streamline the acquisition of platform-specific binaries. The binaries provided by the author are highly optimized, surpassing the performance of the traditional **Node.js** `bin.js` approach. By invoking the binaries directly, we circumvent unnecessary overhead, resulting in significantly reduced startup times and enhanced efficiency.

## Installation

```sh
npm install dalisoft/commitlint-go-npm -D
# or
yarn install dalisoft/commitlint-go-npm -D
# or
bun add dalisoft/commitlint-go-npm -D
```

## Environment variables

| Name           | Description                                                                                     | Required |
| -------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `GITHUB_TOKEN` | For [GitHub API](https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting) | Yes      |

## Usage

See [Documentations](#documentations), requires [Environment variables](#environment-variables)

## Similar projects

- [commitlint](https://commitlint.js.org)
- [commitlint-rs](https://github.com/KeisukeYamashita/commitlint-rs)
- [commitlint-sh](https://github.com/dalisoft/commitlint-sh)

## License

Apache-2.0
