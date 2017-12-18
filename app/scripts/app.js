'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/users', {
        templateUrl: 'views/usersList.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/repos', {
        templateUrl: 'views/reposList.html',
        controller: 'ReposCtrl',
        controllerAs: 'repos'
      })
      .when('/repos/:owner/:repo', {
        templateUrl: 'views/repoDetail.html',
        controller: 'RepoDetailCtrl',
        controllerAs: 'repo'
      })
      .when('/users/:username', {
        templateUrl: 'views/userDetail.html',
        controller: 'UserDetailCtrl',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/users'
      });
  });
