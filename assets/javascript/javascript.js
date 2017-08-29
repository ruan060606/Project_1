
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

var uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

//example using places api

$("#button_submit").on("click", function(){
console.log('click');
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