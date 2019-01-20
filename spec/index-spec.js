'use strict';

const fs = require('fs');
const path = require('path');
const execa = require('execa');
const tempy = require('tempy');
const binCheck = require('bin-check');
const binBuild = require('bin-build');
const compareSize = require('compare-size');
const advzip = require('..');

describe('advzip', function () {
    it('builds from source', function (done) {
        const tmp = tempy.directory();
        binBuild.url('https://github.com/amadvance/advancecomp/releases/download/v2.1/advancecomp-2.1.tar.gz', [
            'autoreconf -fiv',
            `./configure --prefix="${tmp}" --bindir="${tmp}"`,
            'make install'
        ])
        .then(() => {
            expect(fs.existsSync(path.join(tmp, 'advzip'))).toBe(true);
            done();
        })
        .catch(done.fail);
    }, 60000);

    it('returns a path to the binary and verifies it is working', function (done) {
        binCheck(advzip, ['--version']).then(done).catch(done.fail);
    });

    it('minifies a ZIP file', function (done) {
        const tmp = tempy.directory();
        const src = path.join(__dirname, 'fixtures/test.zip');
        const contents = fs.readFileSync(src);
        const dest = path.join(tmp, 'test.zip');
        const args = [
            '--recompress',
            '--shrink-extra',
            dest
        ];

        fs.writeFileSync(dest, contents);

        execa(advzip, args)
        .then(() => compareSize(src, dest))
        .then(result => {
            console.log(result);
            expect(result[dest]).toBeLessThan(result[src]);
            done();
        }).catch(done.fail);
    });
});
