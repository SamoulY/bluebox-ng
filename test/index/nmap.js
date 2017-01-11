/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>

  This code may only be used under the GPLv3 license found at
  http://www.gnu.org/licenses/gpl-3.0.txt.
*/

'use strict';

const test = require('tap').test; // eslint-disable-line import/no-extraneous-dependencies

const method = require('../../lib/index/nmap');
const errMsgs = require('../../lib/utils/errorMsgs');
const utils = require('../../lib/utils');


test('with valid "range"', (assert) => {
  assert.plan(2);
  const target = '127.0.0.1';

  method([target])
  .then((res) => {
    assert.equal(res[target].item.scanner, 'nmap');
    assert.deepEqual(utils.keys(res[target]), [
      'item', 'scaninfo', 'verbose',
      'debugging', 'host', 'runstats',
    ]);
  });
});


test('without parameters', (assert) => {
  assert.plan(1);

  method()
  .then(() => assert.fail('should fail.'))
  .catch(err => assert.equal(err.message, errMsgs.paramReq));
});
