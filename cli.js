#!/usr/bin/env node

'use strict';

const spawn = require('child_process').spawn;
const advzip = require('.');

const input = process.argv.slice(2);

spawn(advzip, input, { stdio: 'inherit' }).on('exit', process.exit);
