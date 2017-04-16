//credits: http://materializecss.com/, http://amsul.ca/pickadate.js/date/

$(document).ready(function() {
  $('select').material_select();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'mm-dd-yyyy', //date format
    min: new Date(), //prevent being able to select a past date
  });
});
