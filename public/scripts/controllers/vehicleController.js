VehicleController.$inject = ['VehicleService', '$state'];
function VehicleController(vehicleService, $state){
  //capture variable to avoid problems with context of 'this' in functons within the controller functon.
  //vm stands for view model
  var vm = this;
  //bindable members (public data and methods that can be used in the interface/view)
  vm.allVehicles = [];
  vm.getAllVehicles = getAllVehicles;
  vm.resultVehicles = [];
  vm.search = search;


  //get all vehicles
  function getAllVehicles(){
    vehicleService.getAllVehicles()
      .then(function(response){
        console.log(response);
        vm.allVehicles = response;
      });
  }

  //search for vehicles in specified location
  function search(){
    //get data from form
    var location = $("#location").val();
    //make ajax call to get search results
    vehicleService.search(location)
      .then(function(response){
        console.log(response);
        vm.vehicles = response;
        $state.go('browse');
      });

  }
}
