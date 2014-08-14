'use strict';

describe('Controller: FooterCtrl', function () {

  // load the controller's module
  beforeEach(module('wdesignsApp'));

  var FooterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooterCtrl = $controller('FooterCtrl', {
      $scope: scope
    });
  }));

  // $scope.getYear() returns the full year
  it('should return the current full year', function () {
    expect(scope.getYear()).toBe('2014');
  });
});
