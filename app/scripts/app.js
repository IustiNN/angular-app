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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
