'use strict';

/**
 * @ngdoc function
 * @name wdesignsApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the wdesignsApp
 */
angular.module('wdesignsApp')
  .controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
