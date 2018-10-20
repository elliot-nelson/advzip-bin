# advpng-bin [![Build Status](http://img.shields.io/travis/imagemin/advpng-bin.svg?style=flat)](https://travis-ci.org/imagemin/advpng-bin)

> Recompress ZIP files to their smallest possible sizes.

## Install

```
$ npm install --save advzip-bin
```

## Usage

```js
const {execFile} = require('child_process');
const advzip = require('advzip-bin');

execFile(advzip, ['--recompress', '--shrink-extra', 'archive.zip'], err => {
	console.log('ZIP file minified!');
});
```

## CLI

```
$ npm install --global advzip-bin
```

```
$ advzip --help
```

## License

Licensed under MIT. [Full license here &raquo;](LICENSE.txt)
