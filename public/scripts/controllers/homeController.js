HomeController.$inject = ['$state', '$localStorage', 'vehicleService'];

function HomeController($state, $localStorage, vehicleService){

  var vm = this;
  vm.search = search;
  // focus();

  function focus(){
    $("#location").css("border-bottom-color", "#b388ff");
    $("#location h5").css("color", "#b388ff");
  }
  function search(){
    $localStorage.location = '';
    $localStorage.location = $("#location-value").val();
    $("#location-value").val([]);
    console.log($localStorage.location);
    vehicleService.search($localStorage.location)
      .then(function(response){
        console.log(response);
        $localStorage.resultVehicles = response.data;
        console.log($localStorage.resultVehicles);
        // $("#location-value").prop("selected", false);
        $("#location-value").val([]);
        $state.go('browse', {location: $localStorage.location});
      });
  }
}
