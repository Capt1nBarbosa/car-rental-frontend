MainController.$inject = ['$scope', '$state', '$localStorage', 'vehicleService'];

function MainController($scope, $state, $localStorage, vehicleService){

  var vm = this;
  vm.search = search;
  vm.location = '';

  $scope.$on('userLoggedIn', function(event, data){
    //add user info to localStorage
    $localStorage.name = data.name;
    $localStorage.email = data.email;
    $localStorage.userId = data.id;
    //add user info to controller data
    vm.currentUser = data;
  });

  $scope.$on('userLoggedOut', function(event, data) {
    //remove userinfo from localStorage
    delete $localStorage.name;
    delete $localStorage.email;
    delete $localStorage.userId;
    //remove user info from controller data
    vm.currentUser = null;
  });

  function getLocation(){
    $localStorage.location =
    $("#location-value").val();

    vm.location = $localStorage.location;
  }

  function search(){
    getLocation();
    vehicleService.search($localStorage.location)
      .then(function(response){
        console.log(response);
        $localStorage.resultVehicles = response.data;
        console.log($localStorage.resultVehicles);
        $state.go('browse', {searchByLocation: $localStorage.location}, {reload: true});
      });
  }
}
