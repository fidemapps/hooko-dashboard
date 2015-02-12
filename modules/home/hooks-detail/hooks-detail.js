angular.module('hooko.home.hooksDetail', ['hooko.resources'])
  .directive('hooksDetail', function () {
    return {
      restrict: 'E',
      scope: {
        bundle: '='
      },
      controllerAs: 'hooksDetail',
      controller: function (Hook, $scope) {
        this.hooks = Hook.query({bundleName: $scope.bundle.name});
      },
      templateUrl: 'modules/home/hooks-detail/hooks-detail.html'
    };
  });
