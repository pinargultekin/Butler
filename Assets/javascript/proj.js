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
var itemSearch = "";
// var queryURL = "https://api.edamam.com/search?q="+itemSearch+"&app_id=cd0febb4&app_key=6d1400c54461c5fb357e208675e77e00&from=0&to=3";


var recipeResults = function() {

  var queryURL = "https://api.edamam.com/search?q="+itemSearch+"&app_id=cd0febb4&app_key=6d1400c54461c5fb357e208675e77e00&from=0&to=3";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {


    var rResults = response.hits;

    console.log(rResults);

    for (var j = 0; j < rResults.length; j++) {
      rdiv = $("<div class='card'id='food-image'  alt='Food image'>");
      var img = $("<img class='card-img-top'>");
      img.attr("src", rResults[j].recipe.image);
      var name = $("<div class='card-body p-0'>");
      name.prepend("<a href='#' id='wine-pair' class='btn btn-primary wineButton col-12'>Pair with wine</a>");
      name.prepend("<a href='"+rResults[j].recipe.url+"' target='blank' class='card-title row col-12 food-title'>"+rResults[j].recipe.label+"</a>");
      rdiv.prepend(img, name);
      $("#rec-demo").prepend(rdiv);
    }

  });
};

$("#submitIngredient").on("click", function(event) {
    event.preventDefault();
    var ingredient = $("#ingredient-input").val().trim();
    $("#ingredientList").append( 
        "<li class='list-group-item'>"+ingredient+"</li>");
    list.push(ingredient);
    console.log(list); 
    $("#ingredient-input").val("");
});

var list = [];
var display = [list.length];



$("#recipe-check").on("click", function(event) {
  event.preventDefault();
  for (i=1; i < list.length; i++) {
    console.log(list[i]);
    
    output = output + "%2C" + list[i];
  }
  display = output;
  itemSearch =  list[0] + display;
  
  $("#page1").hide();
  $("#page2").show();
  recipeResults();
});

$(document).ready(function(){
  $("#page1").show();
  $("#page2").hide();
});

// Wine API Integration

var wQueryURL= 'https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine'
var wineRseults = "";

$.ajax({
  url: wQueryURL,
  method: "GET",
  headers: {'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba'}
}).then(function(response) {


  wineRseults = response;

  console.log(wineRseults);

  });
 




