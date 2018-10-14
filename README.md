# generator-complete-react-app [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> After running create-react-app, you still need testing, linting, and other fun stuff

This generator installs and configures in your newly created react app:

- enzyme, including `src/setupTests.js`, and a new shallow rendered smoke test for `<App />` in `src/App.test.js`
- prettier, including `.prettierrc`

The original `package.json` is backed up in `package.json.bak`.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-complete-react-app using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-complete-react-app
```

Then generate your new project:

```bash
create-react-app myCoolApp
cd myCoolApp
git init
git add .
git commit -m initial
```

Then run the completer on that app:

```bash
yo complete-react-app
git add .
git commit -m "prettier, enzyme added"
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Tamara Temple]()


[npm-image]: https://badge.fury.io/js/generator-complete-react-app.svg
[npm-url]: https://npmjs.org/package/generator-complete-react-app
[travis-image]: https://travis-ci.org/tamouse/generator-complete-react-app.svg?branch=master
[travis-url]: https://travis-ci.org/tamouse/generator-complete-react-app
[daviddm-image]: https://david-dm.org/tamouse/generator-complete-react-app.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tamouse/generator-complete-react-app
