ReservationController.$inject = ['$localStorage', 'vehicleService', 'unitService', '$scope', '$state'];
function ReservationController($localStorage, vehicleService, unitService, $scope, $state){
  var vm = this;

  vm.pickUp = '';
  vm.dropOff = '';
  vm.pickUpLocation = '';
  vm.confirmationNum = '';
  vm.total = '';
  vm.calculateTotalPrice = calculateTotalPrice;
  vm.make = make;

  vm.unit = '';

  function make(vehicleId, location){
    // NOTE:  migth need to merge with vehicle method reserve()
    vehicleService.checkAvailability(vehicleId, location)
      .then(function(response){
        console.log(response);
        $localStorage.unit = response[0];
        $localStorage.unit.isAvailable = false;
        vm.unit = $localStorage.unit;
        console.log(vm.unit);
        return vm.unit;
      })
      .then(function(unit){
        vehicleService.reserve(unit)
          .then(function(response){
            console.log(response);
            $state.go('complete');
          })
          .catch(function(error){
            console.log(error);
          });
      })
      .catch(function(error){
        console.log(error);
      });
  }

  function cancel(){
    //check that date is not passed pickip Date
    //update unit to isAvaliable = true
    //update reservation to isOpen = false
  }

  function change(){}

  function calculateTotalPrice(rate){
    vm.total = $localStorage.daysTotal * rate;
    return vm.total;
  }

}
