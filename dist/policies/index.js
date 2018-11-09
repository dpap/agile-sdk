'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pdp = require('./pdp');

var _pdp2 = _interopRequireDefault(_pdp);

var _pap = require('./pap');

var _pap2 = _interopRequireDefault(_pap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
var policies = function policies(base, token) {
  base = '' + base;
  return {
    /**
    * @namespace pdp
    * @memberof agile.policies
    **/
    pdp: (0, _pdp2.default)(base, token),
    /**
    * @namespace pap
    * @memberof agile.policies
    **/
    pap: (0, _pap2.default)(base, token)

  };
};

exports.default = policies;