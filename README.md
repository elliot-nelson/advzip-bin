# advzip-bin [![Build Status](https://travis-ci.org/elliot-nelson/advzip-bin.svg?branch=master)](https://travis-ci.org/elliot-nelson/advzip-bin)

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

## Inspiration

Package structure lifted from the sister package [advpng-bin](https://github.com/imagemin/advpng-bin).

## License

Licensed under MIT. [Full license here &raquo;](LICENSE.txt)
