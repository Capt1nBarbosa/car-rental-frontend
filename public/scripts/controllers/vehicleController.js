VehicleController.$inject = ['vehicleService', '$state', '$scope', '$localStorage'];

function VehicleController(vehicleService, $state, $scope, $localStorage){
  //capture variable to avoid problems with context of 'this' in functons within the controller functon.
  var vm = this;

  vm.allVehicles = [];
  vm.browse = browse;
  vm.getAllVehicles = getAllVehicles;
  vm.location = '';
  vm.resultVehicles = [];

  browse();

  function add(){}

  function browse(){
    console.log($localStorage);
    vm.location = $localStorage.location;
    vm.resultVehicles = $localStorage.resultVehicles;
    console.log(vm.resultVehicles);
  }

  function checkAvailability(){}

  function getAllVehicles(){
    vehicleService.getAllVehicles()
      .then(function(response){
        vm.allVehicles = response.data;
      });
  }

  function edit(){}
  function remove(){}
  function reserve(){}

}
