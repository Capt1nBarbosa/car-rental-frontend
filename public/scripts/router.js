router.$inject = ['$stateProvider', '$urlRouterProvider'];

function router($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
   templateUrl: '/partials/home.html',
   controller: 'HomeController as home'
 })
 .state('browse', {
   url: '/browse/vehicles/:location',
   templateUrl: '/partials/browse.html',
   controller: 'VehicleController as vehicle'
 });
}
