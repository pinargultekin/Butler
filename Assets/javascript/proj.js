
// Create a variable to reference the database



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
      var name = $("<div class='card-body px-5'>");
      var foot = $("<div class='card-footer p-0'>");
      foot.prepend("<a href='#' id='wine-pair' class='btn btn-primary wineButton col-12'>Pair with wine</a>");
      name.prepend("<a href='"+rResults[j].recipe.url+"' target='blank' class='card-title food-title'>"+rResults[j].recipe.label+"</a>");
      rdiv.prepend(img, name, foot);
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


pairing= {
  SauvignonBlanc: ["chicken", "turkey", "pork", "oyster", "scallop", "lobster", "shrimp", "asparagus", "chives", "cilantro"],
  PinotNoir: ["lamb", "sausage", "filet mignon", "chicken", "tuna", "salmon","mushroom", "nutmeg", "cinnamon", "clove"],
  Syrah: ["pepperoni", "sausage", "pork", "tuna","salmon", "beets","tomato", "oregano", "sage"],
  Merlot: ["steak", "grilled", "tuna", "onion","tomato", "mint", "rosemary"],
  CabernetSauvignon: ["venison", "rib eye", "beef", "tuna", "broccoli", "tomato", "rosemary"],
  Chardonnay: ["beef", "chicken", "pork", "fish", "shrimp", "crab", "lobster", "patato", "squash", "basil","sesame"]
}
var wQueryURL= 'https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine='; 

$.ajax({
  url: wQueryURL,
  method: "GET",
  headers: {'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba'}
}).then(function(response) {


  console.log(wineRseults);

  });
 

 $("#wine-pair").on("click", function (event){
  event.preventDefault();
  if (list === "SauvignonBlanc") {
    wQueryURL.append("sauvignon_blanc");
  
    $("#paired-wine")
    $("#page1").hide();
    $("#page2").hide();
    $("#page3").show();
  }
 });

 var firebaseConfig = {
  apiKey: "AIzaSyAR2StH0_4srWKYV2SMNXerJX1_jzHijmk",
  authDomain: "butler-database.firebaseapp.com",
  databaseURL: "https://butler-database.firebaseio.com",
  projectId: "butler-database",
  storageBucket: "butler-database.appspot.com",
  messagingSenderId: "515778616275",
  appId: "1:515778616275:web:57fb705dfc982415"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database();

var connectionsRef = db.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated
// every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = db.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});