MainController.$inject = ['$scope', '$state', '$localStorage', 'vehicleService'];

function MainController($scope, $state, $localStorage, vehicleService){

  // NOTE: refactor this controller into smaller services to clean up and make more readable

  var vm = this;
  //data
  vm.currentUser = null;
  vm.daysTotal = '';
  vm.dropOff = '';
  vm.location = '';
  vm.pickUp = '';
  vm.reservationStarted = false;
  vm.reservationComplete = false;
  vm.showAccountNav = false;
  vm.showProgressNav = true;
  vm.vehicle = {};
  //methods
  vm.displayNav = displayNav;
  vm.isLoggedIn = isLoggedIn;
  vm.search = search;

  loadData()



    $('select').material_select();

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      format: 'mm-dd-yyyy', //date format
      min: new Date(), //prevent being able to select a past date
    });

    $(".dropdown-button").dropdown();


  $scope.$on('userLoggedIn', function(event, data){
    //add user info to localStorage
    $localStorage.currentUser = data;
    //add user info to controller data
    vm.currentUser = $localStorage.currentUser;
  });

  $scope.$on('userLoggedOut', function(event, data) {
    //remove userinfo from localStorage
    $localStorage.$reset();
    //remove user info from controller data
    vm.currentUser = null;
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
      $state.go('review');
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

  function displayNav(navName){
    if (navName === 'account'){
      $localStorage.showProgressNav = false;
      vm.showMainNav = $localStorage.showProgressNav;
      $localStorage.showAccountNav = true;
      vm.showAccountNav = $localStorage.showAccountNav;
    }else if (navName == 'main'){
      $localStorage.showAccountNav = false;
      vm.showMainNav = $localStorage.showAccountNav;
      $localStorage.showProgressNav = true;
      vm.showMainNav = $localStorage.showProgressNav;
    }else {
      $localStorage.showProgressNav = false;
      vm.showMainNav = $localStorage.showProgressNav;
      $localStorage.showAccountNav = false;
      vm.showMainNav = $localStorage.showAccountNav;
      return true;
    }
  }

  function loadData(){
    vm.currentUser = $localStorage.currentUser;
    vm.daysTotal = $localStorage.location;
    vm.dropOff = $localStorage.dropOff;
    vm.location = $localStorage.location;
    vm.pickUp = $localStorage.pickUp;
    vm.reservationStarted = $localStorage.reservationStarted;
    vm.reservationComplete = $localStorage.reservationComplete;
    vm.vehicle = $localStorage.vehicle;
  }
}
