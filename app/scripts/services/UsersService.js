// create an UsersService to fetch our users
function UsersService($http) {
  function getUsers() {
    return $http.get('https://api.github.com/users?since=135').then(function (response) {
      return response.data;
    });
  }
  function getUser(username) {
    return $http.get('https://api.github.com/users/' + username).then(function (response) {
      return response.data;
    });
  }
  return {
    getUsers: getUsers,
    getUser: getUser
  };
}

angular
  .module('angularAppApp')
  .factory('UsersService', UsersService);
