'use strict';

/**
 * @ngdoc function
 * @name wdesignsApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the wdesignsApp
 */
angular.module('wdesignsApp')
  .controller('ServicesCtrl', function($scope, wdesignsData) {
    this.webServices = wdesignsData.content.webServices;
    this.graphicServices = wdesignsData.content.graphicServices;
  });
