# CrudApiIex.DeleteDatasetDataApi

All URIs are relative to *cloud.staging.iexapis.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datasetsProviderIdKeyDelete**](DeleteDatasetDataApi.md#datasetsProviderIdKeyDelete) | **DELETE** /datasets/{provider}/{id}/{key} | 

<a name="datasetsProviderIdKeyDelete"></a>
# **datasetsProviderIdKeyDelete**
> datasetsProviderIdKeyDelete(provider, id, key, token, opts)



### Example
```javascript
import {CrudApiIex} from 'crud_api_iex';

let apiInstance = new CrudApiIex.DeleteDatasetDataApi();
let provider = "provider_example"; // String | provider name
let id = "id_example"; // String | dataset id
let key = "key_example"; // String | dataset data key
let token = "token_example"; // String | pk or sk token
let opts = { 
  'limit': 1.2 // Number | limit
};
apiInstance.datasetsProviderIdKeyDelete(provider, id, key, token, opts, (error, data, response) => {
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
 **id** | **String**| dataset id | 
 **key** | **String**| dataset data key | 
 **token** | **String**| pk or sk token | 
 **limit** | **Number**| limit | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

