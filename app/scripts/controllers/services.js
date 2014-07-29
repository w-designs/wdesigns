'use strict';

/**
 * @ngdoc function
 * @name wdesignsApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the wdesignsApp
 */
angular.module('wdesignsApp')
  .controller('ServicesCtrl', function ($scope, wdesignsData) {
    this.services = wdesignsData.content.services;
  });
