'use strict';

/**
 * @ngdoc function
 * @name wdesignsApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the wdesignsApp
 */
angular.module('wdesignsApp')
  .controller('PortfolioCtrl', function ($scope, wdesignsData) {
    this.projects = wdesignsData.content.projects;
  });
