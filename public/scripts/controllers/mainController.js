MainController.$inject = ['$scope', '$state', '$localStorage', 'vehicleService'];

function MainController($scope, $state, $localStorage, vehicleService){

  // NOTE: refactor this controller into smaller services to clean up and make more readable

  var vm = this;
  vm.currentUser = null;
  vm.isLoggedIn = isLoggedIn;
  vm.location = '';
  vm.reservationStarted = false;
  vm.reservationComplete = false;
  vm.search = search;
  vm.pickUp = '';
  vm.dropOff = '';
  vm.daysTotal = '';
  vm.vehicle = {};

  $scope.$on('userLoggedIn', function(event, data){
    //add user info to localStorage
    $localStorage.currentUser = data;
    //add user info to controller data
    vm.currentUser = $localStorage.currentUser;
  });

  $scope.$on('userLoggedOut', function(event, data) {
    //remove userinfo from localStorage
    delete $localStorage.currentUser;
    //remove user info from controller data
    vm.currentUser = $localStorage.currentUser;
  });

  function getLocation(){
    $localStorage.location =
    $("#location-value").val();
    vm.location = $localStorage.location;
  }

  function getDates(){
    $localStorage.pickup = $("#pick-up-date").val();
    $localStorage.dropOff = $("#return-date").val();
    vm.pickUp = $localStorage.pickup;
    vm.dropOff = $localStorage.dropOff;
  }

  function getSelectedVehicle(vehicle){
    $localStorage.vehicle = vehicle;
    vm.vehicle = $localStorage.vehicle;
  }

  function calculateTotalDays(start, end){
    var date1 = new Date(start);
    var date2 = new Date(end);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    $localStorage.daysTotal = Math.ceil(timeDiff / (1000 * 3600 * 24));
    vm.daysTotal = $localStorage.daysTotal;
  }

  function isLoggedIn(vehicle){
    getSelectedVehicle(vehicle);
    if(!vm.currentUser){
      // NOTE: make reservationStarted into a method
      $localStorage.reservationStarted = true;
      vm.reservationStarted = $localStorage.reservationStarted;
      $localStorage.reservationComplete = false;
      vm.reservationComplete = $localStorage.reservationComplete;
      $state.go('login');
    }else{
      $state.go('reserve');
    }
  }

  function search(){
    getLocation();
    getDates();
    calculateTotalDays(vm.pickUp, vm.dropOff);
    vehicleService.search(vm.location)
      .then(function(response){
        console.log(response);
        $localStorage.resultVehicles = response.data;
        console.log($localStorage.resultVehicles);
        $state.go('browse', {searchByLocation: $localStorage.location});
      });
  }


}
