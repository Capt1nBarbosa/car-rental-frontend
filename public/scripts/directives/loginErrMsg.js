function loginErrMsg(){

  var directive  = {
    link: link,
    restrict: 'C'
  };

  return directive;

  function link(){
    $('.loginErrMsg').addClass('animated shake').css('color', 'red');
  }

}
