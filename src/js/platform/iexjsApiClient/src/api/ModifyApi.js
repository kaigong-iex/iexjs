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
import {ApiClient} from "../ApiClient";

/**
* Modify service.
* @module api/ModifyApi
* @version 1.0.1
*/
export class ModifyApi {

    /**
    * Constructs a new ModifyApi. 
    * @alias module:api/ModifyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the datasetsProviderIdPatch operation.
     * @callback moduleapi/ModifyApi~datasetsProviderIdPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} provider data provider name
     * @param {String} id dataset id
     * @param {String} token pk or sk token
     * @param {module:api/ModifyApi~datasetsProviderIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    datasetsProviderIdPatch(provider, id, token, callback) {
      
      let postBody = null;
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling datasetsProviderIdPatch");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling datasetsProviderIdPatch");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling datasetsProviderIdPatch");
      }

      let pathParams = {
        'provider': provider,'id': id
      };
      let queryParams = {
        'token': token
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-jsonl', 'text/csv'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/datasets/{provider}/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the datasetsProviderIdPut operation.
     * @callback moduleapi/ModifyApi~datasetsProviderIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} provider data provider name
     * @param {String} id dataset id
     * @param {String} token pk or sk token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maximumValidationErrors allowed maximum validation errors
     * @param {module:api/ModifyApi~datasetsProviderIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    datasetsProviderIdPut(provider, id, token, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling datasetsProviderIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling datasetsProviderIdPut");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling datasetsProviderIdPut");
      }

      let pathParams = {
        'provider': provider,'id': id
      };
      let queryParams = {
        'token': token,'maximumValidationErrors': opts['maximumValidationErrors']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-jsonl', 'text/csv'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/datasets/{provider}/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}