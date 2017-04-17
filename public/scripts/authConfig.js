authConfig.$inject = ['$httpProvider'];
function authConfig($httpProvider, authInterceptor) {
      $httpProvider.interceptors.push('authInterceptor');
  }
