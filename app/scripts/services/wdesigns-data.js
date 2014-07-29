'use strict';

/**
 * @ngdoc service
 * @name wdesignsApp.wdesignsData
 * @description
 * # wdesignsData
 * Factory in the wdesignsApp.
 */
angular.module('wdesignsApp')
  .factory('wdesignsData', function ($http) {
    var wdesignsData = {};
    wdesignsData.getData = function () {
      $http.get('./scripts/models/wdesigns.json')
        .success(function (response) {
          wdesignsData.content = response ? response : [];
        });
    };
    return wdesignsData;
  });
