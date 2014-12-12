angular.module('hooko', ['ui.router', 'hooko.home'])
.config(function ($urlRouterProvider, $stateProvider) {
  // All routes go to home.
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'modules/home/home.html'
  });
});
