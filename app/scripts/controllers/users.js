'use strict';
function UsersCtrl(CacheService) {
  this.users = [];
  this.loading = true;
  CacheService.getUsers().then(function (response) {
    this.users = response;
    this.loading = false;
  }.bind(this));
}

angular.module('angularAppApp')
  .controller('UsersCtrl', UsersCtrl);



function UserDetailCtrl($routeParams, CacheService) {
  this.editMode = false;
  this.loading = true;
  var username = $routeParams.username;
  
  CacheService.getUser(username).then(function (response) {
    this.user = response;
    this.loading = false;
  }.bind(this));
  
}
angular.module('angularAppApp')
  .controller('UserDetailCtrl', UserDetailCtrl);
