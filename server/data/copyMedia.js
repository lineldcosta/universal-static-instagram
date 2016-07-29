'use strict';

import path from 'path';
import cpr from 'cpr';
import {noop} from 'lodash';
import getConfig from '../config/get';
import cacheDir from './cacheDir';
import {buildDir} from '../build';

export default (cb) => cpr(
  path.join(cacheDir, getConfig().user, 'media'),
  path.join(buildDir, 'media'),
  {
    deleteFirst: false,
    overwrite: false
  },
  typeof cb === 'function' ? cb : noop
);
