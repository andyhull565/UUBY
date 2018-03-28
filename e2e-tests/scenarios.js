'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /dashboard when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
  });


  describe('dashboard', function() {

    beforeEach(function() {
      browser.get('index.html#!/dashboard');
    });


    it('should render dashboard when user navigates to /dashboard', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('charts', function() {

    beforeEach(function() {
      browser.get('index.html#!/charts');
    });


    it('should render charts when user navigates to /charts', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
