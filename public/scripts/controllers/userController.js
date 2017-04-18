UserController.$inject = [];
function UserController(){
  var vm = this;

  vm.name = '';
  vm.email = '';
  vm.dob = '';
  vm.phoneNumber = '';
  vm.insurance = '';
  vm.address = {};
  vm.licence = '';

  function add(user){
    // NOTE: currently being handled by authController, change later
  }

  function remove(){}

}
