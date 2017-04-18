angular.module('reserve-a-car', ['ui.router', 'ngStorage'])
  .config(authConfig)
  .config(router)
  .factory('authInterceptor', authInterceptor)
  .factory('authTokenService', authTokenService)
  .factory('vehicleService', vehicleService)
  .factory('unitService', unitService)
  .controller('AuthController', AuthController)
  .controller('VehicleController', VehicleController)
  .controller('ReservationController', ReservationController)
  .controller('MainController', MainController);

// NOTE: if times allows refactor all services and controller into ES6 classes

// NOTE: look into jasmine or mocha for unit testing

// NOTE: add pesimistic locking or find_with_lock to backend when checking availability - NOT OPTIONAL

// NOTE: fix bug with browse.html sorting checkboxes

// NOTE: fix bug when refreshig the page signs user out

// NOTE: fix bug page refresh on reservation page logs out user and losses data, use $window.history to resolve

// NOTE: fix bug on logout search form datepicker input is not cleared

// NOTE: make diagrams showing sequence diagram, class model, and code snippets for each use case

// NOTE: add comments through code to explain use and purpose

// NOTE: fix review vehicle table size

// NOTE: add better error handler for promises

// NOTE: look for random reservation number generator, if not use ruby faker gem
