'use strict';

const buildVue2.6 = require('..');
const assert = require('assert').strict;

assert.strictEqual(buildVue2.6(), 'Hello from buildVue2.6');
console.info('buildVue2.6 tests passed');
