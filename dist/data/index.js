'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subscription = require('./subscription');

var _subscription2 = _interopRequireDefault(_subscription);

var _record = require('./record');

var _record2 = _interopRequireDefault(_record);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = function data(base) {
  base = base + '/api';
  return {
    /**
    * @namespace subscription
    * @memberof agile.data
    **/
    subscription: (0, _subscription2.default)(base),
    /**
    * @namespace record
    * @memberof agile.data
    **/
    record: (0, _record2.default)(base),
    /**
    * @namespace settings
    * @memberof agile.data
    **/
    settings: (0, _settings2.default)(base)
  };
}; /*******************************************************************************
    * Copyright (C) 2018 resin.io, and others
    *
    * This program and the accompanying materials are made
    * available under the terms of the Eclipse Public License 2.0
    * which is available at https://www.eclipse.org/legal/epl-2.0/
    *
    * SPDX-License-Identifier: EPL-2.0
    ******************************************************************************/
exports.default = data;