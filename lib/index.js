'use strict';

const path = require('path');
const pkg = require('../package.json');
const BinWrapper = require('bin-wrapper');

const url = `https://raw.github.com/elliot-nelson/advzip-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
    .src(`${url}osx/advzip`, 'darwin')
    .src(`${url}linux/advzip`, 'linux')
    .src(`${url}win32/advzip.exe`, 'win32')
    .dest(path.resolve(__dirname, '../vendor'))
    .use(process.platform === 'win32' ? 'advzip.exe' : 'advzip');
