/*
 * CRUD API iex
 * CRUD API client for iex data platform
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.33
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CrudApiIex);
  }
}(this, function(expect, CrudApiIex) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CrudApiIex.CreateApi();
  });

  describe('(package)', function() {
    describe('CreateApi', function() {
      describe('datasetsProviderIdPost', function() {
        it('should call datasetsProviderIdPost successfully', function(done) {
          // TODO: uncomment, update parameter values for datasetsProviderIdPost call
          /*
          var opts = {};

          instance.datasetsProviderIdPost(provider, id, token, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('datasetsProviderPost', function() {
        it('should call datasetsProviderPost successfully', function(done) {
          // TODO: uncomment, update parameter values for datasetsProviderPost call
          /*
          var opts = {};

          instance.datasetsProviderPost(provider, token, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));