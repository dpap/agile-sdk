'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscription = function subscription(base) {
  base = base + '/record';
  return {
    /**
    * @summary Get records from gateway
    * @name get
    * @public
    * @function
    * @memberof agile.data.record
    * @param [query] {String} - Basic query that is transformed to influx sql
    * @fulfil {Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.record.get()
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    *
    * // you can use any valid mongo-querystring
    * // https://www.npmjs.com/package/mongo-querystring
    * const query = 'deviceID=mySensor'
    * agile.data.record.get(query)
    * .then(function(records) {
    *   console.log(records);
    * });
    **/
    get: function get(query) {
      // TODO make this smarter and pass and object instead

      return (0, _axios2.default)({
        method: 'GET',
        url: query ? base + '?' + query : base
      });
    },

    /**
    * @summary Delete records from gateway
    * @name delete
    * @public
    * @function
    * @memberof agile.data.record
    * @param [query] {String} - Basic query that is transformed to influx sql
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.data.record.delete('deviceID="myDevice&componentID="temperature""')
    * .then(function() {
    *   console.log('Data deleted!');
    * });
    **/

    delete: function _delete(query) {
      return (0, _axios2.default)({
        method: 'DELETE',
        url: query ? base + '?' + query : base
      });
    }
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
exports.default = subscription;