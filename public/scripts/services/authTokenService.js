authTokenService.$inject = ['$localStorage'];
function authTokenService($localStorage){

  return {
    getToken: getToken,
    setToken: setToken
  };

  function getToken() {
    return $localStorage.authToken;
  }

  console.log($localStorage);
  function setToken(token) {
    if (token) {
      $localStorage.authToken = token;
    } else {
      delete $localStorage.authToken;
    }
    console.log($localStorage);
  }
}
