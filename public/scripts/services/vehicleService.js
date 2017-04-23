vehicleService.$inject = ['$http', 'unitService', '$localStorage'];

function vehicleService($http, unitService, $localStorage) {
  // var server = 'http://localhost:3000';
  var server = 'https://cryptic-basin-62047.herokuapp.com';
  return {
    checkAvailability: checkAvailability,
    getAllVehicles: getAllVehicles,
    reserve: reserve,
    search: search
  };

  function checkAvailability(vehicleId, location) {
    console.log(vehicleId);
    console.log(location);
    return $http.get(`${server}/vehicles/${vehicleId}?location=${location}`)
      .then(function(response){
        console.log(response);
        return response.data.data;
      })
      .catch(function(error){
        console.log(error);
        return error;
      });
  }

  function reserve(unit){
    return unitService.update(unit)
      .then(function(response){
        console.log(response);
        $localStorage.reservationComplete = true;
        return response;
      });
  }

  function getAllVehicles(){
    return $http.get(`${server}/vehicles`)
      .then(function(response){
        console.log(response);
        return response.data;
      })
      .catch(function(error){
        console.log(error);
      });
  }

  function search(location){
      console.log('hit serach method in vehicle service');
      var data = [];
      var vehicles = [];
      var units = [];
    return $http.get(`${server}/vehicles/search?location=${location}`)
      .then(function(response){
        console.log(response);
        return response.data;
      })
      .catch(function(error){
        console.log(error);
      });
  }
}
