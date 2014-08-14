'use strict';

/**
 * @ngdoc function
 * @name wdesignsApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the wdesignsApp
 */
angular.module('wdesignsApp')
  .controller('ContactCtrl', function($scope, wdesignsData) {
    this.contacts = wdesignsData.content.contacts;
  });
