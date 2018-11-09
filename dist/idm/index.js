'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

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
var idm = function idm(base) {
  base = '' + base;
  return {
    /**
    * @namespace group
    * @memberof agile.idm
    **/
    group: (0, _group2.default)(base),
    /**
    * @namespace user
    * @memberof agile.idm
    **/
    user: (0, _user2.default)(base),
    /**
    * @namespace entity
    * @memberof agile.idm
    **/
    entity: (0, _entity2.default)(base),
    /**
    * @namespace authentication
    * @memberof agile.idm
    **/
    authentication: (0, _authentication2.default)(base)

  };
};

exports.default = idm;