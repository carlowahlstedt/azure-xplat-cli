// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2c1b71df-fc23-48fc-b08a-337a64cae58c\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/loadBalancingRules/test-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"test-address-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\",\r\n        \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/loadBalancingRules/test-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [\r\n      {\r\n        \"name\": \"test-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/loadBalancingRules/test-rule\",\r\n        \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 90,\r\n          \"backendPort\": 90,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 20,\r\n          \"protocol\": \"Udp\",\r\n          \"loadDistribution\": \"SourceIP\",\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"test-probe\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/probes/test-probe\",\r\n        \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"29c0d075-e3fd-4e25-8c1d-aaee85043b20"',
  'x-ms-request-id': 'd15673ed-7f0e-4680-8780-ea6273a91021',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '40133c86-ba12-455b-8300-79ef21aac23d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160212T111648Z:40133c86-ba12-455b-8300-79ef21aac23d',
  date: 'Fri, 12 Feb 2016 11:16:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2c1b71df-fc23-48fc-b08a-337a64cae58c\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/loadBalancingRules/test-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"test-address-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\",\r\n        \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"loadBalancingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/loadBalancingRules/test-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [\r\n      {\r\n        \"name\": \"test-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/loadBalancingRules/test-rule\",\r\n        \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 90,\r\n          \"backendPort\": 90,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 20,\r\n          \"protocol\": \"Udp\",\r\n          \"loadDistribution\": \"SourceIP\",\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"test-probe\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/probes/test-probe\",\r\n        \"etag\": \"W/\\\"29c0d075-e3fd-4e25-8c1d-aaee85043b20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"29c0d075-e3fd-4e25-8c1d-aaee85043b20"',
  'x-ms-request-id': 'd15673ed-7f0e-4680-8780-ea6273a91021',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '40133c86-ba12-455b-8300-79ef21aac23d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160212T111648Z:40133c86-ba12-455b-8300-79ef21aac23d',
  date: 'Fri, 12 Feb 2016 11:16:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2c1b71df-fc23-48fc-b08a-337a64cae58c\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"test-address-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"test-probe\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/probes/test-probe\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0104d827-58cb-497c-aeb7-c36036365237',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/0104d827-58cb-497c-aeb7-c36036365237?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7b427063-d26e-4545-8ae3-8f3b1e504280',
  'x-ms-routing-request-id': 'WESTEUROPE:20160212T111652Z:7b427063-d26e-4545-8ae3-8f3b1e504280',
  date: 'Fri, 12 Feb 2016 11:16:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2c1b71df-fc23-48fc-b08a-337a64cae58c\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"test-address-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"test-probe\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/probes/test-probe\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0104d827-58cb-497c-aeb7-c36036365237',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/0104d827-58cb-497c-aeb7-c36036365237?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7b427063-d26e-4545-8ae3-8f3b1e504280',
  'x-ms-routing-request-id': 'WESTEUROPE:20160212T111652Z:7b427063-d26e-4545-8ae3-8f3b1e504280',
  date: 'Fri, 12 Feb 2016 11:16:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2c1b71df-fc23-48fc-b08a-337a64cae58c\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"test-address-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"test-probe\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/probes/test-probe\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1bbac031-8cb1-433c-90e0-3f5056205738"',
  'x-ms-request-id': '66ac8a27-c729-4853-b574-c45c2ad3bbf1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c7e6845b-29c8-4fff-9490-9c8fd4c3ed4e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160212T111655Z:c7e6845b-29c8-4fff-9490-9c8fd4c3ed4e',
  date: 'Fri, 12 Feb 2016 11:16:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2c1b71df-fc23-48fc-b08a-337a64cae58c\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"test-address-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"test-probe\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-rule/providers/Microsoft.Network/loadBalancers/test-lb/probes/test-probe\",\r\n        \"etag\": \"W/\\\"1bbac031-8cb1-433c-90e0-3f5056205738\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1bbac031-8cb1-433c-90e0-3f5056205738"',
  'x-ms-request-id': '66ac8a27-c729-4853-b574-c45c2ad3bbf1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'c7e6845b-29c8-4fff-9490-9c8fd4c3ed4e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160212T111655Z:c7e6845b-29c8-4fff-9490-9c8fd4c3ed4e',
  date: 'Fri, 12 Feb 2016 11:16:55 GMT',
  connection: 'close' });
 return result; }]];