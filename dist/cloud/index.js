'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cloud = function cloud(base) {
  base = base + '/api';

  return {
    /**
    * @summary Get the list of cloud related data from Agile Data
    * @name getCloudsInfo
    * @public
    * @function
    * @memberof agile.cloud
    * @fulfil {Object} - Description of supported cloud providers
    * @returns {Promise}
    * @example
    * agile.cloud.getCloudsInfo().then(function(providers) {
    *  console.log(providers.clouds);
    * });
    **/
    getCloudsInfo: function getCloudsInfo() {
      return (0, _axios2.default)({
        method: 'GET',
        url: base + '/cloud'
      });
    },
    /**
    * @summary Get the description of a supported cloud provider
    * @name getCloudInfo
    * @public
    * @param cloudName {String} - The name of the cloud provider
    * @function
    * @memberof agile.cloud
    * @fulfil {Object} - Description of the cloud provider
    * @returns {Promise}
    * @example
    * agile.cloud.getCloudInfo('owncloud').then(function(description) {
    *  console.log(description.cloudName);
    *  console.log(description.requiredFields);
    * });
    **/
    getCloudInfo: function getCloudInfo(cloudName) {
      return (0, _axios2.default)({
        method: 'GET',
        url: base + '/cloud/' + cloudName
      });
    },
    /**
    * @summary Export local data to a cloud
    * @name exportDataToCloud
    * @public
    * @param cloudName {String} - The name of the cloud provider
    * @param dataQuery {Object} - An object encoding a sql query
    * @param customArgs {Object} - Cloud provider specific custom arguments
    * @function
    * @memberof agile.cloud
    * @fulfil {null}
    * @returns {Promise}
    * @example
    * const customArgs = {
    *   username: 'x',
    *   password: 'y',
    *   owncloudServer: 'z'
    * }
    *
    * const query = {
    *   deviceID: 'dummy',
    *   componentID: 'y',
    *   between: '1523831000000 | 1523832000000'
    * }
    *
    * agile.cloud.exportDataToCloud('owncloud', query, customArgs).then(function() {
    *   console.log('Data uploaded')
    * });
    **/
    exportDataToCloud: function exportDataToCloud(cloudName, dataQuery, customArgs) {
      return (0, _axios2.default)({
        method: 'POST',
        url: base + '/cloud/' + cloudName,
        data: {
          query: dataQuery,
          customArgs: customArgs
        }
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
exports.default = cloud;