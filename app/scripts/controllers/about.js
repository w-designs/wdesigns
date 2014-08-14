'use strict';

/**
 * @ngdoc function
 * @name wdesignsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wdesignsApp
 */
angular.module('wdesignsApp')
  .controller('AboutCtrl', function ($scope, wdesignsData) {
    this.profiles = wdesignsData.content.profiles;
  });
