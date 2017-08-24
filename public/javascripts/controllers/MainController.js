app.controller('MainController', ['$scope', 'whipmeet', function($scope, whipmeet) {

  //get all
  // for (int i = 0; i < JSON.data.length; i++) {
  whipmeet.getWhipmeets(function(JSON){
      $scope.meetinfo = JSON;
      $scope.meetparts = {
        name: JSON.data["0"].name,
        place: JSON.data["0"].place,
        car: JSON.data["0"].car,
        date: JSON.data["0"].date,
        time: JSON.data["0"].time,
        type: JSON.data["0"].type,
        phone: JSON.data["0"].phone,

        name2: JSON.data["1"].name,
        place2: JSON.data["1"].place,
        car2: JSON.data["1"].car,
        date2: JSON.data["1"].date,
        time2: JSON.data["1"].time,
        type2: JSON.data["1"].type,
        phone2: JSON.data["1"].phone,

        name3: JSON.data["2"].name,
        place3: JSON.data["2"].place,
        car3: JSON.data["2"].car,
        date3: JSON.data["2"].date,
        time3: JSON.data["2"].time,
        type3: JSON.data["2"].type,
        phone3: JSON.data["2"].phone,

        name4: JSON.data["3"].name,
        place4: JSON.data["3"].place,
        car4: JSON.data["3"].car,
        date4: JSON.data["3"].date,
        time4: JSON.data["3"].time,
        type4: JSON.data["3"].type,
        phone4: JSON.data["3"].phone,

        name5: JSON.data["4"].name,
        place5: JSON.data["4"].place,
        car5: JSON.data["4"].car,
        date5: JSON.data["4"].date,
        time5: JSON.data["4"].time,
        type5: JSON.data["4"].type,
        phone5: JSON.data["4"].phone,

        name6: JSON.data["5"].name,
        place6: JSON.data["5"].place,
        car6: JSON.data["5"].car,
        date6: JSON.data["5"].date,
        time6: JSON.data["5"].time,
        type6: JSON.data["5"].type,
        phone6: JSON.data["5"].phone,

        name7: JSON.data["6"].name,
        place7: JSON.data["6"].place,
        car7: JSON.data["6"].car,
        date7: JSON.data["6"].date,
        time7: JSON.data["6"].time,
        type7: JSON.data["6"].type,
        phone7: JSON.data["6"].phone,

        name8: JSON.data["7"].name,
        place8: JSON.data["7"].place,
        car8: JSON.data["7"].car,
        date8: JSON.data["7"].date,
        time8: JSON.data["7"].time,
        type8: JSON.data["7"].type,
        phone8: JSON.data["7"].phone,

        name9: JSON.data["8"].name,
        place9: JSON.data["8"].place,
        car9: JSON.data["8"].car,
        date9: JSON.data["8"].date,
        time9: JSON.data["8"].time,
        type9: JSON.data["8"].type,
        phone9: JSON.data["8"].phone,

        name10: JSON.data["9"].name,
        place10: JSON.data["9"].place,
        car10: JSON.data["9"].car,
        date10: JSON.data["9"].date,
        time10: JSON.data["9"].time,
        type10: JSON.data["9"].type,
        phone10: JSON.data["9"].phone
      };
      console.log(JSON);


  },
  function(err){
    console.log(err)
  });
  //} <- this one closes the loop

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
    type: $("#meet_type").val(),
    phone: $("#meet_phone").val()
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

 $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
  });

   