function authInterceptor(authTokenService) {
  return {
    request: addToken
  };

  function addToken(config){
    var token = authTokenService.getToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
}
