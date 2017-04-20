//credits: auth lesson by General Assembly
//https://generalassemb.ly/education/web-development-immersive-remote

AuthController.$inject = ['$http', '$state', '$scope', '$rootScope', '$localStorage', '$window', 'authTokenService'];
function AuthController($http, $state, $scope, $rootScope, $localStorage, $window, authTokenService) {
  var vm = this;

  vm.signup = signup;
  vm.login = login;
  vm.logout = logout;
  // var server = 'http://localhost:3000';
  var server = 'https://cryptic-basin-62047.herokuapp.com';

  function signup(newUser) {
    console.log('hit signup method');
    $http.post(`${server}/users`, { user: newUser } )
      .then(function(response) {
        console.log(response);
        vm.newUser={};
        //login user after signup
        login({email: newUser.email, password: newUser.password});
      });
  }

  function login(user) {
    $http.post(`${server}/users/login`, {user: user} )
      .then(function(response) {
        authTokenService.setToken(response.data.token);
        $scope.$emit('userLoggedIn', response.data.user);
        $scope.$emit('fetchData', response.data.user);
        if($localStorage.reservationStarted){
          $state.go('review');
        }else{
          // NOTE: make this into reusable method to clean up code
          // location.reload();
          Materialize.updateTextFields();
          Materialize.updateTextFields();
          $('select').material_select();
          $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year
            format: 'mm-dd-yyyy', //date format
            min: new Date(), //prevent being able to select a past date
          });
          $window.history.back();
        }
    });
  }

  function logout() {
    console.log('hit logout method');
    authTokenService.setToken();

    $scope.$emit('userLoggedOut');

    // location.reload();
    Materialize.updateTextFields();
    $('select').material_select();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      format: 'mm-dd-yyyy', //date format
      min: new Date(), //prevent being able to select a past date
    });
    $state.go('home',{}, {reload: true});
  }

}
