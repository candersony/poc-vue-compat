'use strict';

const componentLibrary = require('..');
const assert = require('assert').strict;

assert.strictEqual(componentLibrary(), 'Hello from componentLibrary');
console.info('componentLibrary tests passed');
