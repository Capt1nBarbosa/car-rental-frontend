userService.$inject = ['$http', '$localStorage'];

function userService($http, $localStorage){

  var api = 'http://localhost:3000';
  // var api = 'https://cryptic-basin-62047.herokuapp.com';

  var service = {
    add: add,
    edit: edit,
    get: get,
    remove: remove
  }

  return service;


  function add(newUser){
    return $http.post(`${api}/users`, {user: newUser})
      .then(function(response) {
        console.log(response);
        return response;
      });
  }

  function edit(user, userId){
    return $http.put(`${api}/users/${userId}`, {user: user})
     .then(function(response){
       return response.data.user;
     });
  }

  function get(userId){
    return $http.get(`${api}/users/${userId}`)
      .then(function(response){
        console.log(response);
        return response;
      });
  }

  function remove(userId){
    return $http.delete(`${api}/users/${userId}`)
      .then(function(response){
        console.log(response);
        return response;
      });
  }
}
