angular.module('reserve-a-car', ['ui.router'])
  .config(router)
  .factory('vehicleService', vehicleService)
  .controller('VehicleController', VehicleController);
