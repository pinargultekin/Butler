// const firebaseConfig = {
//   apiKey: "AIzaSyBBDgBqGMtIDNTScDk9-LajgqBSOTkURb0",
//   authDomain: "food-wine-project.firebaseapp.com",
//   databaseURL: "https://food-wine-project.firebaseio.com",
//   projectId: "food-wine-project",
//   storageBucket: "food-wine-project.appspot.com",
//   messagingSenderId: "760442689212",
//   appId: "1:760442689212:web:7b64254f6a203455"
// };
// firebase.initializeApp(firebaseConfig);

// // Create a variable to reference the database
// var db = firebase.database();

var queryURL = "https://api.edamam.com/search?q=chicken%2Crice&app_id=cd0febb4&app_key=6d1400c54461c5fb357e208675e77e00&from=0&to=3&calories=591-722&health=alcohol-free";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  results.text(JSON.stringify(response));
});

$("#submitIngredient").on("click", function(event) {
    event.preventDefault();
    var ingredient = $("#ingredient-input").val().trim();
    $("#ingredientList").append( 
        "<li class='list-group-item'>"+ingredient+"</li>");
    list.push(ingredient);
    console.log(list);  
});

var list = [];

var results = "";

$("#check-recipe").on("click", function(event) {
    event.preventDefault();
    console.log(results);  
});


