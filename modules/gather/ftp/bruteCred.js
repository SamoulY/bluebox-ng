/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const bruter = require('../../../lib/bruterCreds');
const auth = require('../../../lib/protocols/ftp').auth;
const optsComm = require('../../../cfg/commonOpts/bruteCred');
const utils = require('../../../lib/utils');

const optsC = utils.cloneDeep(optsComm);
optsC.rport.default = 21;


module.exports.desc = 'FTP credentials brute force.';


module.exports.opts = optsC;


module.exports.impl = (opts = {}) => bruter(opts.rhost, auth, opts);
