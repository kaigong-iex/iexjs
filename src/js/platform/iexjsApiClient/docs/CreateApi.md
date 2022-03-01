# CrudApiIex.CreateApi

All URIs are relative to *cloud.staging.iexapis.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datasetsProviderIdPost**](CreateApi.md#datasetsProviderIdPost) | **POST** /datasets/{provider}/{id} | 
[**datasetsProviderPost**](CreateApi.md#datasetsProviderPost) | **POST** /datasets/{provider} | 

<a name="datasetsProviderIdPost"></a>
# **datasetsProviderIdPost**
> datasetsProviderIdPost(provider, id, token, opts)



### Example
```javascript
import {CrudApiIex} from 'crud_api_iex';

let apiInstance = new CrudApiIex.CreateApi();
let provider = "provider_example"; // String | data provider name
let id = "id_example"; // String | dataset id
let token = "token_example"; // String | pk or sk token
let opts = { 
  'maximumValidationErrors': 1.2 // Number | allowed maximum validation errors
};
apiInstance.datasetsProviderIdPost(provider, id, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| data provider name | 
 **id** | **String**| dataset id | 
 **token** | **String**| pk or sk token | 
 **maximumValidationErrors** | **Number**| allowed maximum validation errors | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-jsonl, text/csv
 - **Accept**: Not defined

<a name="datasetsProviderPost"></a>
# **datasetsProviderPost**
> datasetsProviderPost(provider, token, opts)



### Example
```javascript
import {CrudApiIex} from 'crud_api_iex';

let apiInstance = new CrudApiIex.CreateApi();
let provider = "provider_example"; // String | data provider name
let token = "token_example"; // String | pk or sk token
let opts = { 
  'maximumValidationErrors': 1.2 // Number | allowed maximum validation errors
};
apiInstance.datasetsProviderPost(provider, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| data provider name | 
 **token** | **String**| pk or sk token | 
 **maximumValidationErrors** | **Number**| allowed maximum validation errors | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-jsonl, text/csv
 - **Accept**: Not defined

