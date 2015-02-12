angular.module('hooko.home.hookSummary', ['hooko.resources'])
  .directive('hookSummary', function () {
    return {
      restrict: 'E',
      scope: {
        bundle: '=',
        hook: '='
      },
      controllerAs: 'hookSummary',
      controller: function (Statistics, $scope) {
        this.summary = Statistics.get({bundleName: $scope.bundle.name, hookId: $scope.hook._id});
      },
      templateUrl: 'modules/home/hooks-detail/hook-summary.html'
    };
  });
