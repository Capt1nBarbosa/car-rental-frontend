reservationService.$inject = ['$http', '$state', '$localStorage'];

function reservationService($http, $state, $localStorage){
  // var api = 'http://localhost:3000';
  var api = 'https://cryptic-basin-62047.herokuapp.com';

  var service = {
    make: make,
    getAll: getAll,
    cancel: cancel
  }

  return service;

  function make(newReservation){
    console.log(newReservation);
    return $http.post(`${api}/users/${$localStorage.currentUser.id}/reservations`, {reservation: newReservation})
      .then(function(response) {
        console.log(response);
        return response.data;
      });
  }

  function getAll(){
    return $http.get(`${api}/users/${$localStorage.currentUser.id}/reservations`)
      .then(function(response) {
        console.log(response);
        return response.data;
      });
  }

  function cancel(reservationId){
    return $http.delete(`${api}/users/${$localStorage.currentUser.id}/reservations/${reservationId}`)
      .then(function(response){
        console.log(response);
      });


  }

}
