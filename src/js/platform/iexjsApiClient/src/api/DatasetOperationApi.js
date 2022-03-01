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
* DatasetOperation service.
* @module api/DatasetOperationApi
* @version 1.0.1
*/
export class DatasetOperationApi {

    /**
    * Constructs a new DatasetOperationApi. 
    * @alias module:api/DatasetOperationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the datasetsProviderGet operation.
     * @callback moduleapi/DatasetOperationApi~datasetsProviderGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} provider provider name
     * @param {String} token pk or sk token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit limit
     * @param {module:api/DatasetOperationApi~datasetsProviderGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    datasetsProviderGet(provider, token, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling datasetsProviderGet");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling datasetsProviderGet");
      }

      let pathParams = {
        'provider': provider
      };
      let queryParams = {
        'token': token,'limit': opts['limit']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/datasets/{provider}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}