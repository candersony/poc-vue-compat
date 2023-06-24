'use strict';

const buildVue2.7 = require('..');
const assert = require('assert').strict;

assert.strictEqual(buildVue2.7(), 'Hello from buildVue2.7');
console.info('buildVue2.7 tests passed');
