vehicleService.$inject = ['$http'];

function vehicleService($http) {
  return {
    getAllVehicles: getAllVehicles,
    search: search
  };

  function getAllVehicles(){
    return $http.get('http://localhost:3000/vehicles')
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
    return $http.get(`http://localhost:3000/vehicles/search?location=${location}`)
      .then(function(response){
        console.log(response);
        return response.data;
      })
      .catch(function(error){
        console.log(error);
      });
  }
}
