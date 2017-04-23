AccountController.$inject = ['$localStorage', '$scope', 'userService'];
function AccountController($localStorage, $scope, userService){
  var vm = this;

  vm.curUser = $localStorage.currentUser;

  vm.displayEditForm = displayEditForm;
  vm.displayInfo = true;
  vm.edit = edit;

  function edit(user, userId){
    console.log('hit edit');
    console.log(user);
    console.log(userId);
    userService.edit(user,userId)
      .then(function(response){
        console.log(response);
        $scope.$emit('setUserData', response);
        displayEditForm('hide')
      })
      .catch(function(error){
        console.log(error);
    });
  }

  function close(){}

  function displayEditForm(option){
    if(option === 'show'){
      $('#account-edit-form').css('display', 'block');
      vm.user = $localStorage.currentUser;
      vm.displayInfo = false;
    }else{
      $('#account-edit-form').css('display', 'none');
      vm.displayInfo = true;
    }
  }

}
