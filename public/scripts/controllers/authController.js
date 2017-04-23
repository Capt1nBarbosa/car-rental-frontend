//credits: auth lesson by General Assembly
//https://generalassemb.ly/education/web-development-immersive-remote

AuthController.$inject = ['$http', '$state', '$scope', '$rootScope', '$localStorage', '$window', 'authTokenService'];
function AuthController($http, $state, $scope, $rootScope, $localStorage, $window, authTokenService) {
  var vm = this;

  vm.signup = signup;
  vm.login = login;
  vm.logout = logout;
  vm.showLoginError = false;
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
      })
      .catch(function(error){
        console.log(error);
      });
  }

  function login(user) {
    $http.post(`${server}/users/login`, {user: user} )
      .then(function(response) {
        authTokenService.setToken(response.data.token);
        $scope.$emit('setUserData', response.data.user);
        if($localStorage.reservationStarted){
          $state.go('review');
        }else{
          $state.go('home');
          // $window.history.back();
        }
      })
      .catch(function(error){
        console.log(error);
        vm.showLoginError = true;
      });
  }

  function logout() {
    console.log('hit logout method');
    authTokenService.setToken();
    $scope.$emit('userLoggedOut');
    // location.reload();
    $state.go('home',{}, {reload: true});
  }

}
