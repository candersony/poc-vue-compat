'use strict';

const build2.6 = require('..');
const assert = require('assert').strict;

assert.strictEqual(build2.6(), 'Hello from build2.6');
console.info('build2.6 tests passed');
