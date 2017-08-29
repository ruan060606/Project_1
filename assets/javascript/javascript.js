
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
        callbacks: {
          signInSuccess: function(currentUser, credential, redirectUrl) {
            // Do something.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
        // Query parameter name for mode.
        queryParameterForWidgetMode: 'mode',
        // Query parameter name for sign in success url.
        queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // Whether the display name should be displayed in the Sign Up page.
            requireDisplayName: true
          },
          {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            // Invisible reCAPTCHA with image challenge and bottom left badge.
            recaptchaParameters: {
              type: 'image',
              size: 'invisible',
              badge: 'bottomleft'
            }
          }
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

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