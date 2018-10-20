'use strict';

const BinBuild = require('bin-build');
const log = require('logalot');
const bin = require('.');

bin.run(['--version'], err => {
    if (err) {
        log.warn(err.message);
        log.warn('advzip pre-build test failed');
        log.info('compiling from source');

        const builder = new BinBuild()
            .src('https://github.com/amadvance/advancecomp/releases/download/v2.1/advancecomp-2.1.tar.gz')
            .cmd('autoreconf -fiv')
            .cmd(`./configure --prefix="${bin.dest()}" --bindir="${bin.dest()}"`)
            .cmd('make install');

        return builder.run(err => {
            if (err) {
                log.error(err.stack);
                return;
            }

            log.success('advzip built successfully');
        });
    }

    log.success('advzip pre-build test passed successfully');
});
