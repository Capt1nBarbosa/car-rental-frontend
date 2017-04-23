unitService.$inject = ['$http', '$state', '$localStorage'];

function unitService($http, $state, $localStorage) {
  // var server = 'http://localhost:3000';
  var server = 'https://cryptic-basin-62047.herokuapp.com';
  return {
    update: update,
    checkAvailability: checkAvailability
  };

  function update(unit) {
    console.log(unit);
    return $http.patch(`${server}/users/${$localStorage.currentUser.id}/units/${unit.unit_id}`, unit )
      .then(function(response){
        console.log(response);
        return response.data;
      })
      .catch(function(error){
        console.log(error);
        return error;
      });
  }

  function checkAvailability(vehicleId) {
    return $http.get(`${server}/units/checkAvailability?vehicle_id=${vehicleId}`)
      .then(function(response){
        console.log(response);
        return response.data;
      })
      .catch(function(error){
        console.log(error);
        return error;
      });
  }

}
