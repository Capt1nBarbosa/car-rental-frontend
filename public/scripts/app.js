angular.module('reserve-a-car', ['ui.router', 'ngStorage'])
  .config(router)
  .factory('vehicleService', vehicleService)
  .controller('VehicleController', VehicleController)
  .controller('HomeController', HomeController);
