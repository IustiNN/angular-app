'use strict';
// create an ReposService to fetch our repos
function ReposService($http) {
  function getRepos() {
    return $http.get('https://api.github.com/repositories').then(function (response) {
      return response.data;
    });
  }
  function getRepo(owner, repo) {
    return $http.get('https://api.github.com/repos/' + owner + '/' + repo).then(function (response) {
      return response.data;
    });
  }
  return {
    getRepos: getRepos,
    getRepo: getRepo
  };
}

angular
  .module('angularAppApp')
  .factory('ReposService', ReposService);
