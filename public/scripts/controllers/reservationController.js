ReservationController.$inject = ['$localStorage', 'vehicleService', 'unitService', '$scope', '$state', 'reservationService', '$window'];
function ReservationController($localStorage, vehicleService, unitService, $scope, $state, reservationService, $window){
  var vm = this;

  vm.pickUp = '';
  vm.dropOff = '';
  vm.pickUpLocation = '';
  vm.confirmationNum = '';
  vm.total = '';
  vm.calculateTotalPrice = calculateTotalPrice;
  vm.make = make;
  vm.reservation = {};
  vm.print = print;
  vm.reservedVehicle = {};
  vm.unit = {};
  vm.allReservations = {};
  vm.getAll = getAll;
  vm.showRes = false;
  vm.rate = '';
  vm.cancel = cancel;


  getAll();
  loadReservation();

  function make(vehicle, location){
    $localStorage.reservedVehicle = vehicle;
    // vm.reservedVehicle = $localStorage.reservedVehicle;
    vehicleService.checkAvailability(vehicle.id, location)
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
            // $state.go('confiramtion');
          });
      })
      .then(function(){

        vm.reservation = {
        pickUp: $localStorage.pickUp,
        dropOff: $localStorage.dropOff,
        location: $localStorage.location,
        isOpen: true,
        unit_id: vm.unit.id,
        cost: $localStorage.total
      };
      console.log(vm.reservation);
        reservationService.make(vm.reservation)
          .then(function(response){
            console.log(response);
            $localStorage.reservation = response;
            vm.reservation = $localStorage.reservation;

            delete $localStorage.location;
            delete $localStorage.vehicle;
            delete $localStorage.reservationStarted;
            delete $localStorage.reservationComplete ;
            $scope.$emit('reservationComplete');

            $state.go('confiramtion', {}, {reload: true});
          })
          .catch(function(error){
            console.log(error);
          });
      })
      .catch(function(error){
        console.log(error);
      });
  }

  function getAll(){
    reservationService.getAll()
      .then(function(response){
        console.log(response);
        $localStorage.allReservations = response;
        vm.allReservations = $localStorage.allReservations;
        showReservations();
        console.log(vm.allReservations);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  function showReservations(){
    console.log($localStorage.allReservations.length);

    if($localStorage.allReservations.length !== 0){
      vm.showRes = true;
    }else{
      vm.showResMsg = false;
    }
  }

  function cancel(reservation){
    //check that date is not passed pickip Date
    //update unit to isAvaliable = true
    //update reservation to isOpen = false
    unitService.update({unit_id: reservation.unit_id, isAvaliable: true})
      .then(function(response){
        console.log(response);
      })
      .then(function(){
        reservationService.cancel(reservation.id)
          .then(function(response){
          console.log(response);
          getAll();
        });
      })
      .catch(function(error){
        console.log(error);
      });

  }

  function change(){}

  function calculateTotalPrice(rate){
    $localStorage.rate = rate;
    vm.rate = $localStorage.rate;
    $localStorage.total = $localStorage.daysTotal * $localStorage.rate ;
    vm.total = $localStorage.total;
    return vm.total;
  }

  function print(){
    $window.print();
  }

  function loadReservation() {
    vm.reservation = $localStorage.reservation;
    vm.reservedVehicle = $localStorage.reservedVehicle;
    vm.pickUp = $localStorage.pickUp;
    vm.dropOff = $localStorage.dropOff;
    vm.total = $localStorage.total;
    vm.rate = $localStorage.rate;
  }

}
