'use strict';

import {assign} from 'lodash';
import minimist from 'minimist';

let config;
try {
  // eslint-disable-next-line import/no-unresolved
  config = require('../../config.json');
}
catch (e) {
  config = {};
}

const cli = minimist(process.argv.slice(2), {
  string: ['token', 'user', 'domain']
});

// CLI options override config
export default () => assign({}, config, cli);
