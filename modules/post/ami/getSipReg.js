/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const nami = require('nami');

const post = require('../../../lib/post');
const optsComm = require('../../../cfg/commonOpts/post');


module.exports.desc = 'Get SIP registry info.';


module.exports.opts = optsComm;


module.exports.impl = (opts = {}) => {
  const optsParsed = opts;
  optsParsed.proto = 'ami';
  const action = new nami.Actions.SipShowRegistry();

  return post(optsParsed.rhost, action, optsParsed);
};
