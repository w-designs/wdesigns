'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('wdesignsApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  // $scope.isActive returns the user's location path
  it('should return users location path', function () {
    expect(scope.isActive()).toBe(/^#\//);
  });
});
