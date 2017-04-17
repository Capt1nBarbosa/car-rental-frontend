router.$inject = ['$stateProvider', '$urlRouterProvider'];

function router($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
   templateUrl: '/partials/home.html'
 })
 .state('browse', {
   url: '/browse/vehicles/:searchByLocation',
   templateUrl: '/partials/browse.html',
   controller: 'VehicleController as vehicle'
 })
 .state('signup', {
   url: '/signup',
   templateUrl: '/partials/signup.html',
   controller: 'AuthController as auth'
 })
 .state('login', {
   url: '/login',
   templateUrl: '/partials/login.html',
   controller: 'AuthController as auth'
 });
}
