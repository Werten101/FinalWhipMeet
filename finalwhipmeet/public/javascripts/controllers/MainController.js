app.controller('MainController', ['$scope', 'whipmeet', function($scope, whipmeet) {

  //get all
  whipmeet.getWhipmeets(function(JSON){
      $scope.meetinfo = JSON;
      $scope.meetparts = {
        name: JSON.data["0"].name,
        place: JSON.data["0"].place,
        car: JSON.data["0"].car,
        date: JSON.data["0"].date,
        time: JSON.data["0"].time,
        type: JSON.data["0"].type,
        stock: JSON.data["0"].stock
      };
      console.log(JSON);

  },
  function(err){
    console.log(err)
  });

  //get one
  // whipmeet.getWhipmeets("id::1234567", function(data){

  // },
  // function(err){
  //   console.log(err)
  // });


  //create 
  $("#submitBtn").on("click", function() {
  whipmeet.createWhipmeets({
    name: $("#meet_name").val(),
    place: $("#meet_place").val(),
    car: $("#meet_car").val(),
    date: $("#meet_date").val(),
    time: $("#meet_time").val(),
    type: $("#meet_type").val()
    },
     function(data){
      console.log("Succesfully added to db")

  },
  function(err){
    console.log(err)
  });
});




 }]);


//loop
// for (int i = 0; i < numberOfIndicesInJson; i++) {
//     // get values using JSON[i + ""].key;
// }




$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

    $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

   