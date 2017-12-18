'use strict';
function CacheService($cacheFactory, UsersService, ReposService, $q, $timeout) {
  var cachedData = {},
      keys = [],
      cache = $cacheFactory('cacheId'),
      usersKey = 'usersKey',
      reposKey = 'reposKey',
      userDetailKey = 'userDetailKey',
      repoDetailKey = 'repoDetailKey';
  
  cachedData.getUsers = function () {
    var deferred = $q.defer();
    $timeout(function () {
      // if cache is not working, call $http
      if(angular.isUndefined(cache.get(usersKey))) {
        UsersService.getUsers().then(function (response) {
          cachedData = response;
          deferred.resolve(cachedData);
          keys.push(usersKey);
          cache.put(usersKey, angular.isUndefined(cachedData) ? null : cachedData);
        });
      }
      // else read from ache
      else {
        cachedData = cache.get(usersKey);
        deferred.resolve(cachedData);
      }
    }, 1);
    return deferred.promise;
  };
  
  
  cachedData.getUser = function (username) {
    var deferred = $q.defer();
      // if cache is not working, call $http
      if(angular.isUndefined(cache.get(userDetailKey+username))) {
        UsersService.getUser(username).then(function (response) {
          cachedData = response;
          deferred.resolve(cachedData);
          keys.push(userDetailKey+username);
          cache.put(userDetailKey+username, angular.isUndefined(cachedData) ? null : cachedData);
        });
      }
      // else read from ache
      else {
        cachedData = cache.get(userDetailKey+username);
        deferred.resolve(cachedData);
      }
    return deferred.promise;
  };
  
  cachedData.getRepos = function () {
    var deferred = $q.defer();
        if (angular.isUndefined(cache.get(reposKey))) {
          ReposService.getRepos().then(function (response) {
            cachedData = response;
            deferred.resolve(cachedData);
            keys.push(reposKey);
            cache.put(reposKey, angular.isUndefined(cachedData) ? null : cachedData);
          });
        } else {
          cachedData = cache.get(reposKey);
          deferred.resolve(cachedData);
        }
  
    return deferred.promise;
  };
  
  
  
  cachedData.getRepo = function (owner, repo) {
    var deferred = $q.defer();
    // if cache is not working, call $http
    if(angular.isUndefined(cache.get(repoDetailKey+owner+repo))) {
      ReposService.getRepo(owner, repo).then(function (response) {
        cachedData = response;
        deferred.resolve(cachedData);
        keys.push(repoDetailKey+owner+repo);
        cache.put(repoDetailKey+owner+repo, angular.isUndefined(cachedData) ? null : cachedData);
      });
    }
    // else read from ache
    else {
      cachedData = cache.get(repoDetailKey+owner+repo);
      deferred.resolve(cachedData);
    }
    return deferred.promise;
  };

  return cachedData;
}

angular
  .module('angularAppApp')
  .factory('CacheService', CacheService);
