# CrudApiIex.DatasetOperationApi

All URIs are relative to *cloud.staging.iexapis.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datasetsProviderGet**](DatasetOperationApi.md#datasetsProviderGet) | **GET** /datasets/{provider} | 

<a name="datasetsProviderGet"></a>
# **datasetsProviderGet**
> datasetsProviderGet(provider, token, opts)



### Example
```javascript
import {CrudApiIex} from 'crud_api_iex';

let apiInstance = new CrudApiIex.DatasetOperationApi();
let provider = "provider_example"; // String | provider name
let token = "token_example"; // String | pk or sk token
let opts = { 
  'limit': 1.2 // Number | limit
};
apiInstance.datasetsProviderGet(provider, token, opts, (error, data, response) => {
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
 **provider** | **String**| provider name | 
 **token** | **String**| pk or sk token | 
 **limit** | **Number**| limit | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

