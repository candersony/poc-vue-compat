'use strict';

const build3 = require('..');
const assert = require('assert').strict;

assert.strictEqual(build3(), 'Hello from build3');
console.info('build3 tests passed');
