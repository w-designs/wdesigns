'use strict';

/**
 * @ngdoc function
 * @name wdesignsApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the wdesignsApp
 */
angular.module('wdesignsApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.getYear = function () {
      return new Date().getFullYear().toString();
    };
  });
