angular.module('hooko.home.hooksDetail', ['hooko.resources'])
.directive('hooksDetail', function () {
  return {
    restrict: 'E',
    scope: {
      bundle: '='
    },
    controllerAs: 'hooksDetail',
    controller: function (Hook, Action, $scope) {
      this.hooks = Hook.query({bundleName: $scope.bundle.name});
      this.actions = Action.query({bundle: $scope.bundle._id});
    },
    templateUrl: 'modules/home/hooks-detail/hooks-detail.html'
  };
});
