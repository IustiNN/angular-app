function DetailCtrl($routeParams, UsersService) {
    console.log($routeParams.id);
    this.user = [];
    UsersService.getUser($routeParams.id).then(function (response) {
      this.user = response;
    }.bind(this));
}
angular.module('angularAppApp')
  .controller('DetailCtrl', DetailCtrl);
