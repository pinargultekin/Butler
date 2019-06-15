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
// var results = $.ajax({
//   url: queryURL,
//   method: "GET"
//   }).then(function(response) {
//   console.log(response);
// });

var resultsDummy = "dummy results";

var output = "";

var queryURL = "https://api.edamam.com/search?q=chicken%2Crice&app_id=cd0febb4&app_key=6d1400c54461c5fb357e208675e77e00&from=0&to=3";


$("#submitIngredient").on("click", function(event) {
    event.preventDefault();
    var ingredient = $("#ingredient-input").val().trim();
    $("#ingredientList").append( 
        "<li class='list-group-item'>"+ingredient+"</li>");
    list.push(ingredient);
    // console.log(list);  
});

var list = [];



$("#recipe-check").on("click", function(event) {
  event.preventDefault();
  for (i=0; i < list.length; i++) {
    console.log(list[i]);
    output = list[0];
    output = output + "%2" + list[i];
  } 
  console.log(output);
  $("#page1").hide();
  $("#page2").show();
    
});


