angular.module('hooko.home', [
  'hooko.resources',
  'hooko.home.hooksDetail',
  'ngPrettyJson'
])
.controller('HomeCtrl', function (Bundle) {
  this.bundles = Bundle.query();
});
