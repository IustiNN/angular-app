function ReposCtrl(CacheService) {
  this.repos = [];
  this.loading = true;
  CacheService.getRepos().then(function (response) {
    this.repos = response;
    this.loading = false;
  }.bind(this));
}


angular.module('angularAppApp')
  .controller('ReposCtrl', ReposCtrl);


function RepoDetailCtrl($routeParams, CacheService) {
  this.repo = [];
  this.loading = true;
  var owner = $routeParams.owner,
      repo  = $routeParams.repo;
  
  CacheService.getRepo(owner, repo).then(function (response) {
    this.repo = response;
    this.loading = false;
  }.bind(this));
  
}
angular.module('angularAppApp')
  .controller('RepoDetailCtrl', RepoDetailCtrl);
