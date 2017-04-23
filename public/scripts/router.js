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
 .state('login', {
   url: '/login',
   templateUrl: '/partials/login.html',
   controller: 'AuthController as auth'
 })
 .state('reservations', {
   url: '/reservations',
   templateUrl: '/partials/reservations.html',
   controller:'ReservationController as reservation'
 })
 .state('review', {
   url: '/review',
   templateUrl: '/partials/review.html',
   controller: "ReservationController as reservation"
 })
 .state('account', {
   url: '/user/account',
   templateUrl: '/partials/account.html'
 })
 .state('confiramtion', {
   url: '/confiramtion',
   templateUrl: '/partials/confirmation.html',
   controller: 'ReservationController as reservation'
 })
 .state('signup', {
   url: '/signup',
   templateUrl: '/partials/signup.html',
   controller: 'AuthController as auth'
 });
}
