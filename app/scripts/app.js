'use strict';

/**
 * @ngdoc overview
 * @name wdesignsApp
 * @description
 * # wdesignsApp
 *
 * Main module of the application.
 */
angular
  .module('wdesignsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services',
        // TODO: abstract this repeated resolve function either to each controller or to a service to be injected
        resolve: {
          get: function (wdesignsData) {
            return wdesignsData.getData();
          }
        }
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio',
        // TODO: abstract this repeated resolve function either to each controller or to a service to be injected
        resolve: {
          get: function (wdesignsData) {
            return wdesignsData.getData();
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        // TODO: abstract this repeated resolve function either to each controller or to a service to be injected
        resolve: {
          get: function (wdesignsData) {
            return wdesignsData.getData();
          }
        }
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact',
        // TODO: abstract this repeated resolve function either to each controller or to a service to be injected
        resolve: {
          get: function (wdesignsData) {
            return wdesignsData.getData();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
