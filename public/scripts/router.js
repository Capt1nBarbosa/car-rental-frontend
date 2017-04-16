router.$inject = ['$stateProvider', '$urlRouterProvider'];

function router($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
   templateUrl: '/partials/home.html'
 })
 .state('browse', {
   url: '/',
   templateUrl: '/partials/browse.html',
   controller: 'VehicleController as vehicle'
 });
}
