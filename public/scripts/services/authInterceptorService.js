function authInterceptor(authTokenService) {
  return {
    request: addToken
  };

  function addToken(config){
   console.log(config);
    var token = authTokenService.getToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  }
}
