// inject UsersService and bind the
// response to `this.users`
function UsersCtrl(UsersService) {
  this.users = [];
  UsersService.getUsers().then(function (response) {
    this.users = response;
  }.bind(this));
}


angular.module('angularAppApp')
  .controller('UsersCtrl', UsersCtrl);
