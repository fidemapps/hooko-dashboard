angular.module('hooko.home', [
  'hooko.resources',
  'hooko.config',
  'hooko.home.hooksDetail',
  'hooko.home.hookSummary',
  'ngPrettyJson'
])
  .controller('HomeCtrl', function (Bundle) {
    this.bundles = Bundle.query();

    $('#bundleTabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show')
    });
  });
