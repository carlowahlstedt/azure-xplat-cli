// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate6772/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/delete?api-version=2016-03-30', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidParameter\",\r\n    \"target\": \"instanceIds\",\r\n    \"message\": \"The provided instanceId 999 is not an active Virtual Machine Scale Set VM instanceId.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '0f403154-90e7-428f-bf79-be37a64421cf',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '14e6addd-25b8-4e16-9582-ab0b55975253',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T101954Z:14e6addd-25b8-4e16-9582-ab0b55975253',
  date: 'Thu, 28 Apr 2016 10:19:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate6772/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/delete?api-version=2016-03-30', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidParameter\",\r\n    \"target\": \"instanceIds\",\r\n    \"message\": \"The provided instanceId 999 is not an active Virtual Machine Scale Set VM instanceId.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '0f403154-90e7-428f-bf79-be37a64421cf',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '14e6addd-25b8-4e16-9582-ab0b55975253',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T101954Z:14e6addd-25b8-4e16-9582-ab0b55975253',
  date: 'Thu, 28 Apr 2016 10:19:53 GMT',
  connection: 'close' });
 return result; }]];