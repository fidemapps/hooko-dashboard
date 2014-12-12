angular.module('hooko.resources', ['ngResource'])
.factory('Bundle', function ($resource) {
  return $resource('http://0.0.0.0:3000/api/bundles/:bundleName', {bundleName: '@name'});
})
.factory('Hook', function ($resource) {
  return $resource('http://0.0.0.0:3000/api/bundles/:bundleName/hooks/:hookId', {hookId: '@id'});
})
.factory('Action', function ($resource) {
  return $resource('http://0.0.0.0:3000/api/actions');
});
