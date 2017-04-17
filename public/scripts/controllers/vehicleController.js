VehicleController.$inject = ['vehicleService', '$state', '$scope', '$localStorage'];

function VehicleController(vehicleService, $state, $scope, $localStorage){
  //capture variable to avoid problems with context of 'this' in functons within the controller functon.
  //vm stands for view model
  var vm = this;
  //bindable members (public data and methods that can be used in the interface/view)
  vm.allVehicles = [];
  vm.browse = browse;
  vm.getAllVehicles = getAllVehicles;
  vm.location = '';
  vm.resultVehicles = [];

  browse();
  // focus();

  function getAllVehicles(){
    vehicleService.getAllVehicles()
      .then(function(response){
        console.log(response);
        vm.allVehicles = response.data;
      });
  }

  function browse(){
    console.log('hit serach method in vehicle controller');
    vm.location = $localStorage.location;
    vm.resultVehicles = $localStorage.resultVehicles;

  }

  function focus(){
    $("#location").css("border-bottom-color", "#ffffff");
    $("#location h5").css("color", "#ffffff");
    $("#select-vehicle").css("border-bottom-color", "#b388ff");
    $("#select-vehicle h5").css("color", "#b388ff");
  }
}
