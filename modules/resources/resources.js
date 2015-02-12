angular.module('hooko.resources', ['ngResource'])
  .constant('hookoUrl', 'http://localhost:3000')
  .factory('Bundle', function ($resource, hookoUrl) {
    return $resource(hookoUrl + '/api/bundles/:bundleName', {bundleName: '@name'});
  })
  .factory('Hook', function ($resource, hookoUrl) {
    return $resource(hookoUrl + '/api/bundles/:bundleName/hooks/:hookId', {hookId: '@id'});
  })
  .factory('Action', function ($resource, hookoUrl) {
    return $resource(hookoUrl + '/api/actions');
  })
  .factory('Statistics', function ($resource, hookoUrl) {
    return $resource(hookoUrl + '/api/bundles/:bundleName/hooks/:hookId/summary', {hookId: '@id'});
  });
