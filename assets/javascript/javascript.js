
(function(){
//example using places api

$("#button_submit").on("click", function(){

var API_KEY = "AIzaSyCQPkqDoLqZjqpqhqnnRyE79yUe0omijso";
//https://stackoverflow.com/questions/45185061/google-places-api-cors
var PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
var caloriesToBurn =  parseInt($("#calorie_field").val().trim());
var weight = parseInt($("#weight_field").val().trim())
// http://www.livestrong.com/article/314404-how-many-calories-do-you-lose-per-mile/
var caloriesPerMile = weight * .75

var milesToRun = caloriesToBurn / caloriesPerMile;
var type="museum";
var location = "51.503186,-0.126446";
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