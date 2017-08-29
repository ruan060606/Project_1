(function(){
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCEHUOLj9sQo4PFvEtbI0uDOktzzroLcYQ",
  authDomain: "running-app-58fcf.firebaseapp.com",
  databaseURL: "https://running-app-58fcf.firebaseio.com",
  projectId: "running-app-58fcf",
  storageBucket: "",
  messagingSenderId: "886763704573"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

//example using places api

var API_KEY = "AIzaSyCQPkqDoLqZjqpqhqnnRyE79yUe0omijso";
//https://stackoverflow.com/questions/45185061/google-places-api-cors
var PROXY_URL = 'https://cors-anywhere.herokuapp.com/'

var radius = "5000";
var type="museum";
var location = "51.503186,-0.126446";
var url = PROXY_URL
		+"https://maps.googleapis.com/maps/api/place/radarsearch/"
        +"json?location=" + location + "&"
        +"radius=" + radius + "&" 
        +"type=" + type + "&"
        +"key="+API_KEY;


$.ajax({method:"GET", 
		url: url}).done(function(data){console.log(data)})

})()