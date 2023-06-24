'use strict';

const buildVue3 = require('..');
const assert = require('assert').strict;

assert.strictEqual(buildVue3(), 'Hello from buildVue3');
console.info('buildVue3 tests passed');
