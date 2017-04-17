//credits: auth lesson by General Assembly
//https://generalassemb.ly/education/web-development-immersive-remote

AuthController.$inject = ['$http', '$state', '$scope', '$rootScope', 'authTokenService'];
function AuthController($http, $state, $scope, $rootScope, authTokenService) {
  var vm = this;

  vm.signup = signup;
  vm.login = login;
  vm.logout = logout;
  var server = 'http://localhost:3000';

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
        $rootScope.$emit('fetchData', response.data.user);
        $state.go('home', {reload: true});
    });
  }

  function logout() {
    console.log('hit logout method');
    authTokenService.setToken();
    $scope.$emit('userLoggedOut');
    $state.go('home', {reload: true});
  }

}
