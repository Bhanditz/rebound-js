/**
 *  Copyright (c) 2013, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = {
  extends: 'fbjs-opensource',
  plugins: ['prettier'],
  rules: {
    'consistent-return': 0, // handled by flow
    'max-len': 0, // handled by prettier
    'prettier/prettier': ['error'],
  },
};
