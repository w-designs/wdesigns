'use strict';

describe('Service: wdesignsData', function () {

  // load the service's module
  beforeEach(module('wdesignsApp'));

  // instantiate service
  var wdesignsData;
  beforeEach(inject(function (_wdesignsData_) {
    wdesignsData = _wdesignsData_;
  }));

  it('should do something', function () {
    expect(!!wdesignsData).toBe(true);
  });

});
