angular.module('velocity-nexus', ['ui.router', 'ngStorage'])
  .config(authConfig)
  .config(router)
  .directive('loginErrMsg', loginErrMsg)
  .factory('authInterceptor', authInterceptor)
  .factory('authTokenService', authTokenService)
  .factory('vehicleService', vehicleService)
  .factory('unitService', unitService)
  .factory('userService', userService)
  .factory('reservationService', reservationService)
  .controller('AuthController', AuthController)
  .controller('AccountController', AccountController)
  .controller('VehicleController', VehicleController)
  .controller('ReservationController', ReservationController)
  .controller('UserController', UserController)
  .controller('MainController', MainController);


// NOTE: look into jasmine or mocha for unit testing

// NOTE: add pesimistic locking or find_with_lock to backend when checking availability - NOT OPTIONAL

// NOTE: fix bug with browse.html sorting checkboxes

// NOTE: make diagrams showing sequence diagram, class model, and code snippets for each use case

// NOTE: hide secret in .env file, backend
