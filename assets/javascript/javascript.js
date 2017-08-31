
(function(){
//get user location
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(geoLocation){
    var latitude = geoLocation.coords.latitude;
    var longitude = geoLocation.coords.longitude
    var location = latitude + "," + longitude;
    //example using places api

    $("#button_submit").on("click", function(e){
      e.preventDefault()

    var API_KEY = "AIzaSyCQPkqDoLqZjqpqhqnnRyE79yUe0omijso";
    //https://stackoverflow.com/questions/45185061/google-places-api-cors
    var PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    var caloriesToBurn =  parseInt($("#calorie_field").val().trim());
    var weight = parseInt($("#weight_field").val().trim())
    // http://www.livestrong.com/article/314404-how-many-calories-do-you-lose-per-mile/
    var caloriesPerMile = weight * .75

    var milesToRun = caloriesToBurn / caloriesPerMile;
    console.log("milesToRUn", milesToRun)
    var type="museum";
    var url = PROXY_URL
        +"https://maps.googleapis.com/maps/api/place/radarsearch/"
            +"json?location=" + location + "&"
            +"radius=" + milesToRun + "&" 
            +"type=" + type + "&"
            +"key="+API_KEY;

            console.log("url",url)



      $.ajax({method:"GET", 
          url: url}).done(function(data){
            console.log("done")
            console.log(data)
            })


    })


  })
  

}


})()

// Firebase set up /////////////////////////////////////////
  var config = {
    apiKey: "AIzaSyCEHUOLj9sQo4PFvEtbI0uDOktzzroLcYQ",
    authDomain: "running-app-58fcf.firebaseapp.com",
    databaseURL: "https://running-app-58fcf.firebaseio.com",
    projectId: "running-app-58fcf",
    storageBucket: "running-app-58fcf.appspot.com",
    messagingSenderId: "886763704573"
  };
  firebase.initializeApp(config);