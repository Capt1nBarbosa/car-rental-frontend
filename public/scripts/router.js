angular.module('reserve-a-car', ['ui.router'])
  .config(RentACarRouter);

function RentACarRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
   templateUrl: '/partials/home.html'
 });
}
