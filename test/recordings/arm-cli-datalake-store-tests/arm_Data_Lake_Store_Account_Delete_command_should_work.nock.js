// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlspysample01.azuredatalakestore.net\",\"accountId\":\"f7a5c302-324f-4e8c-949a-9d9bd37d0560\",\"creationTime\":\"2016-09-07T18:13:56.9504562Z\",\"lastModifiedTime\":\"2016-09-07T18:13:56.9504562Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlpysamplerg01/providers/Microsoft.DataLakeStore/accounts/adlspysample01\",\"name\":\"adlspysample01\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadlscd761330.azuredatalakestore.net\",\"accountId\":\"7b92abde-b1fe-4b5b-9f46-fae5adfc2e4d\",\"creationTime\":\"2016-11-10T21:44:51.2057522Z\",\"lastModifiedTime\":\"2016-11-10T21:44:51.2057522Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_accountscd761330/providers/Microsoft.DataLakeStore/accounts/pyarmadlscd761330\",\"name\":\"pyarmadlscd761330\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadls5e621603.azuredatalakestore.net\",\"accountId\":\"e7bbd84b-76dc-4ca7-b24e-88fbe4ce36ad\",\"creationTime\":\"2016-11-10T19:31:45.3226661Z\",\"lastModifiedTime\":\"2016-11-10T19:31:45.3226661Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_catalog_secrets5e621603/providers/Microsoft.DataLakeStore/accounts/pyarmadls5e621603\",\"name\":\"pyarmadls5e621603\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls333.azuredatalakestore.net\",\"accountId\":\"1606e6df-2bb1-4b3b-befa-57707c6d5758\",\"creationTime\":\"2016-12-02T01:04:33.8047989Z\",\"lastModifiedTime\":\"2016-12-02T01:04:33.8047989Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333\",\"name\":\"xplattestadls333\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9354.azuredatalakestore.net\",\"accountId\":\"ea431e65-f360-4a2c-95aa-c09a29b796d5\",\"creationTime\":\"2016-12-02T01:05:23.2508068Z\",\"lastModifiedTime\":\"2016-12-02T01:06:01.2506476Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9354\",\"name\":\"xplattestadls9354\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2761',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7c3e5c0c-e288-4d9e-ae93-47a2e39a0e53',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '3f52129e-d248-4822-baaa-88008f994f99',
  'x-ms-routing-request-id': 'CENTRALUS:20161202T010601Z:3f52129e-d248-4822-baaa-88008f994f99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:06:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlspysample01.azuredatalakestore.net\",\"accountId\":\"f7a5c302-324f-4e8c-949a-9d9bd37d0560\",\"creationTime\":\"2016-09-07T18:13:56.9504562Z\",\"lastModifiedTime\":\"2016-09-07T18:13:56.9504562Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlpysamplerg01/providers/Microsoft.DataLakeStore/accounts/adlspysample01\",\"name\":\"adlspysample01\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadlscd761330.azuredatalakestore.net\",\"accountId\":\"7b92abde-b1fe-4b5b-9f46-fae5adfc2e4d\",\"creationTime\":\"2016-11-10T21:44:51.2057522Z\",\"lastModifiedTime\":\"2016-11-10T21:44:51.2057522Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_accountscd761330/providers/Microsoft.DataLakeStore/accounts/pyarmadlscd761330\",\"name\":\"pyarmadlscd761330\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadls5e621603.azuredatalakestore.net\",\"accountId\":\"e7bbd84b-76dc-4ca7-b24e-88fbe4ce36ad\",\"creationTime\":\"2016-11-10T19:31:45.3226661Z\",\"lastModifiedTime\":\"2016-11-10T19:31:45.3226661Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_catalog_secrets5e621603/providers/Microsoft.DataLakeStore/accounts/pyarmadls5e621603\",\"name\":\"pyarmadls5e621603\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls333.azuredatalakestore.net\",\"accountId\":\"1606e6df-2bb1-4b3b-befa-57707c6d5758\",\"creationTime\":\"2016-12-02T01:04:33.8047989Z\",\"lastModifiedTime\":\"2016-12-02T01:04:33.8047989Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333\",\"name\":\"xplattestadls333\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9354.azuredatalakestore.net\",\"accountId\":\"ea431e65-f360-4a2c-95aa-c09a29b796d5\",\"creationTime\":\"2016-12-02T01:05:23.2508068Z\",\"lastModifiedTime\":\"2016-12-02T01:06:01.2506476Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9354\",\"name\":\"xplattestadls9354\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2761',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7c3e5c0c-e288-4d9e-ae93-47a2e39a0e53',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '3f52129e-d248-4822-baaa-88008f994f99',
  'x-ms-routing-request-id': 'CENTRALUS:20161202T010601Z:3f52129e-d248-4822-baaa-88008f994f99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:06:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9354?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'c3c172b6-4588-450a-b200-b816eba98499',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '0d9a0b7b-9096-4800-a2cc-862e685cef71',
  'x-ms-routing-request-id': 'CENTRALUS:20161202T010604Z:0d9a0b7b-9096-4800-a2cc-862e685cef71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:06:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9354?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'c3c172b6-4588-450a-b200-b816eba98499',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '0d9a0b7b-9096-4800-a2cc-862e685cef71',
  'x-ms-routing-request-id': 'CENTRALUS:20161202T010604Z:0d9a0b7b-9096-4800-a2cc-862e685cef71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:06:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlspysample01.azuredatalakestore.net\",\"accountId\":\"f7a5c302-324f-4e8c-949a-9d9bd37d0560\",\"creationTime\":\"2016-09-07T18:13:56.9504562Z\",\"lastModifiedTime\":\"2016-09-07T18:13:56.9504562Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlpysamplerg01/providers/Microsoft.DataLakeStore/accounts/adlspysample01\",\"name\":\"adlspysample01\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadlscd761330.azuredatalakestore.net\",\"accountId\":\"7b92abde-b1fe-4b5b-9f46-fae5adfc2e4d\",\"creationTime\":\"2016-11-10T21:44:51.2057522Z\",\"lastModifiedTime\":\"2016-11-10T21:44:51.2057522Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_accountscd761330/providers/Microsoft.DataLakeStore/accounts/pyarmadlscd761330\",\"name\":\"pyarmadlscd761330\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadls5e621603.azuredatalakestore.net\",\"accountId\":\"e7bbd84b-76dc-4ca7-b24e-88fbe4ce36ad\",\"creationTime\":\"2016-11-10T19:31:45.3226661Z\",\"lastModifiedTime\":\"2016-11-10T19:31:45.3226661Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_catalog_secrets5e621603/providers/Microsoft.DataLakeStore/accounts/pyarmadls5e621603\",\"name\":\"pyarmadls5e621603\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls333.azuredatalakestore.net\",\"accountId\":\"1606e6df-2bb1-4b3b-befa-57707c6d5758\",\"creationTime\":\"2016-12-02T01:04:33.8047989Z\",\"lastModifiedTime\":\"2016-12-02T01:04:33.8047989Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333\",\"name\":\"xplattestadls333\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2170',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a94d927d-f861-48a8-9184-2e2c567c5e43',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '053e8ae3-58ed-4bc3-a3fc-87eafc8d26bf',
  'x-ms-routing-request-id': 'CENTRALUS:20161202T010605Z:053e8ae3-58ed-4bc3-a3fc-87eafc8d26bf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:06:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlspysample01.azuredatalakestore.net\",\"accountId\":\"f7a5c302-324f-4e8c-949a-9d9bd37d0560\",\"creationTime\":\"2016-09-07T18:13:56.9504562Z\",\"lastModifiedTime\":\"2016-09-07T18:13:56.9504562Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlpysamplerg01/providers/Microsoft.DataLakeStore/accounts/adlspysample01\",\"name\":\"adlspysample01\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadlscd761330.azuredatalakestore.net\",\"accountId\":\"7b92abde-b1fe-4b5b-9f46-fae5adfc2e4d\",\"creationTime\":\"2016-11-10T21:44:51.2057522Z\",\"lastModifiedTime\":\"2016-11-10T21:44:51.2057522Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_accountscd761330/providers/Microsoft.DataLakeStore/accounts/pyarmadlscd761330\",\"name\":\"pyarmadlscd761330\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"pyarmadls5e621603.azuredatalakestore.net\",\"accountId\":\"e7bbd84b-76dc-4ca7-b24e-88fbe4ce36ad\",\"creationTime\":\"2016-11-10T19:31:45.3226661Z\",\"lastModifiedTime\":\"2016-11-10T19:31:45.3226661Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test_mgmt_datalake_analytics_test_adla_catalog_secrets5e621603/providers/Microsoft.DataLakeStore/accounts/pyarmadls5e621603\",\"name\":\"pyarmadls5e621603\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls333.azuredatalakestore.net\",\"accountId\":\"1606e6df-2bb1-4b3b-befa-57707c6d5758\",\"creationTime\":\"2016-12-02T01:04:33.8047989Z\",\"lastModifiedTime\":\"2016-12-02T01:04:33.8047989Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls333\",\"name\":\"xplattestadls333\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2170',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a94d927d-f861-48a8-9184-2e2c567c5e43',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '053e8ae3-58ed-4bc3-a3fc-87eafc8d26bf',
  'x-ms-routing-request-id': 'CENTRALUS:20161202T010605Z:053e8ae3-58ed-4bc3-a3fc-87eafc8d26bf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:06:05 GMT',
  connection: 'close' });
 return result; }]];