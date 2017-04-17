VehicleController.$inject = ['vehicleService', '$state', '$scope', '$localStorage'];

function VehicleController(vehicleService, $state, $localStorage){
  //capture variable to avoid problems with context of 'this' in functons within the controller functon.
  var vm = this;

  vm.allVehicles = [];
  vm.browse = browse;
  vm.getAllVehicles = getAllVehicles;
  vm.location = '';
  vm.resultVehicles = [];

  browse();

  function getAllVehicles(){
    vehicleService.getAllVehicles()
      .then(function(response){
        vm.allVehicles = response.data;
      });
  }

  function browse(){
    vm.location = $localStorage.location;
    vm.resultVehicles = $localStorage.resultVehicles;
  }
}
