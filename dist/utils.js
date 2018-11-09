'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenGet = exports.tokenDelete = exports.tokenSet = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// axios interceptors don't respect application/x-www-form-urlencoded set headers
// https://github.com/mzabriskie/axios/issues/362
/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
_axios2.default.interceptors.request.use(function (request) {
  if (request.data && request.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    request.data = _qs2.default.stringify(request.data);
  }
  return request;
});

// sets up default axios response
_axios2.default.interceptors.response.use(function (response) {
  // we're only interested in the res body
  return response.data;
}, function (error) {
  // reject on error
  return Promise.reject(error);
});

var tokenSet = exports.tokenSet = function tokenSet(token) {
  if (token) {
    _axios2.default.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
  return token;
};

var tokenDelete = exports.tokenDelete = function tokenDelete(token) {
  delete _axios2.default.defaults.headers.common['Authorization'];
  return;
};

var tokenGet = exports.tokenGet = function tokenGet(token) {
  if (_axios2.default.defaults.headers.common['Authorization']) {
    return _axios2.default.defaults.headers.common['Authorization'].split(' ')[1];
  }
};