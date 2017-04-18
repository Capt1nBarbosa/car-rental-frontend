unitService.$inject = ['$http', '$state'];

function unitService($http, $state) {
  var server = 'http://localhost:3000';
  return {
    update: update,
    checkAvailability: checkAvailability
  };

  function update(unit, userId) {
    console.log(unit);
    console.log(userId);
    return $http.patch(`${server}/users/${userId}/units/${unit.id}`, unit)
      .then(function(response){
        console.log(response);
        return response.data;
        $state.go('complete');
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
