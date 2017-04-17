angular.module('reserve-a-car', ['ui.router', 'ngStorage'])
  .config(authConfig)
  .config(router)
  .factory('authInterceptor', authInterceptor)
  .factory('authTokenService', authTokenService)
  .factory('vehicleService', vehicleService)
  .controller('AuthController', AuthController)
  .controller('VehicleController', VehicleController)
  .controller('MainController', MainController);
