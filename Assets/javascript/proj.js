
// Create a variable to reference the database



var resultsDummy = "dummy results";

var output = "";
var itemSearch = "";

var vine = "";
// var queryURL = "https://api.edamam.com/search?q="+itemSearch+"&app_id=cd0febb4&app_key=6d1400c54461c5fb357e208675e77e00&from=0&to=3";

var rResults;
var recipeResults = function () {

  var queryURL = "https://api.edamam.com/search?q=" + itemSearch + "&app_id=cd0febb4&app_key=6d1400c54461c5fb357e208675e77e00&from=0&to=3";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {


    rResults = response.hits;

    console.log(rResults);

    for (var j = 0; j < rResults.length; j++) {
      rdiv = $("<div class='card'id='food-image'  alt='Food image'>");
      var img = $("<img class='card-img-top'>");
      img.attr("src", rResults[j].recipe.image);
      var name = $("<div class='card-body px-5'>");
      var foot = $("<div class='card-footer p-0'>");
      foot.prepend("<a href='#' id='" + j + "' class='btn btn-primary wineButton col-12'>Pair with wine</a>");
      name.prepend("<a href='" + rResults[j].recipe.url + "' target='blank' class='card-title food-title'>" + rResults[j].recipe.label + "</a>");
      rdiv.prepend(img, name, foot);
      $("#rec-demo").prepend(rdiv);
    }
    // console.log(rResults[0].recipe.ingredientLines);


  }).done(function (response) {
    // var wResult;
    // wResult= response.hits;
    // return wResult;
    console.log(rResults);
  });


};


$("#submitIngredient").on("click", function (event) {
  event.preventDefault();
  var ingredient = $("#ingredient-input").val().trim();
  $("#ingredientList").append(
    "<button id='ingredient' class='list-group-item'>" + ingredient + "</button>");
  list.push(ingredient);
  console.log(list);
  $("#ingredient-input").val("");

});

// Get the input field
var input = document.getElementById("ingredient-input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submitIngredient").click();
  }
});

$(document.body).on("click", ".list-group-item", function () {
  var ingredientToRemove = $(this).text();
  console.log(ingredientToRemove);
  // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
  $(this).remove();
  for (var i = list.length - 1; i >= 0; i--) {
    if (list[i] === ingredientToRemove) {
      list.splice(i, 1);
      // break;       //<-- Uncomment  if only the first term has to be removed
    };
  };
  console.log(list);
});

var list = [];
var display = [list.length];



$("#recipe-check").on("click", function (event) {
  event.preventDefault();
  for (i = 1; i < list.length; i++) {
    console.log(list[i]);

    output = output + "%2C" + list[i];
  }
  display = output;
  itemSearch = list[0] + display;

  $("#page1").hide();
  $("#page2").show();
  recipeResults();
});

$(document).ready(function () {
  $("#page1").show();
  $("#page2").hide();
});

// Wine API Integration



var SauvignonBlanc = ["chicken", "turkey", "pork", "oyster", "scallop", "lobster", "shrimp", "asparagus", "chive", "cilantro"];
var PinotNoir = ["lamb", "sausage", "filet mignon", "chicken", "tuna", "salmon", "mushroom", "nutmeg", "cinnamon", "clove"];
var Syrah = ["pepperoni", "sausage", "pork", "tuna", "salmon", "beets", "tomato", "oregano", "sage"];
var Merlot = ["steak", "grilled", "tuna", "onion", "tomato", "mint", "rosemary"];
var CabernetSauvignon = ["venison", "rib eye", "beef", "tuna", "broccoli", "tomato", "rosemary"];
var Chardonnay = ["beef", "chicken", "pork", "fish", "shrimp", "crab", "lobster", "patato", "squash", "basil", "sesame"];




// var wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=" + vine;

// $.ajax({
//   url: wQueryURL,
//   method: "GET",

//   headers: { 'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba' }
// }).then(function (response) {

//   console.log(response);

// });

// document.getElementsByClassName("wineButton").on("click", function (event) {

$(document).on('click', ".wineButton", function () {
  event.preventDefault();

  // console.log("Clicked!");
  // var clickedRecipe = $(this).attr("id");
  // console.log(clickedRecipe);
  // console.log(rResults[clickedRecipe].recipe.ingredientLines);

  // var ingredientArray = rResults[clickedRecipe].recipe.ingredientLines;
  // var match = list.find(val => SauvignonBlanc.includes(val))
  // console.log(match);

  function arrayMatch(a, b) {
    var matches = [];

    for (var i = 0; i < a.length; i++) {
      for (var e = 0; e < b.length; e++) {
        if (a[i] === b[e]) matches.push(a[i]);
      }
    }
    return matches;
  }
  // console.log(arrayMatch(list, SauvignonBlanc).length);
  // console.log(arrayMatch(list, PinotNoir).length);
  // console.log(arrayMatch(list, Syrah).length);
  // console.log(arrayMatch(list, Merlot).length);
  // console.log(arrayMatch(list, CabernetSauvignon).length);
  // console.log(arrayMatch(list, Chardonnay).length);

  var Blancmatches = arrayMatch(list, SauvignonBlanc).length;
  var Pinotmatches = arrayMatch(list, PinotNoir).length;
  var Syrahmatches = arrayMatch(list, Syrah).length;
  var Merlotmatches = arrayMatch(list, Merlot).length;
  var Cabernetmatches = arrayMatch(list, CabernetSauvignon).length;
  var Chardonnaymatches = arrayMatch(list, Chardonnay).length;

  console.log(Blancmatches);
  console.log(Pinotmatches);
  console.log(Syrahmatches);
  console.log(Merlotmatches);
  console.log(Cabernetmatches);
  console.log(Chardonnaymatches);

  // wineMatches = [];
  // wineMatches.push(Blancmatches, Pinotmatches, Syrahmatches, Merlotmatches, Cabernetmatches, Chardonnaymatches);
  // console.log(wineMatches);

  function getWine() {
    if ((Blancmatches > Pinotmatches) && (Blancmatches > Syrahmatches) && (Blancmatches > Merlotmatches) && (Blancmatches > Cabernetmatches) && (Blancmatches > Chardonnaymatches)) {
      wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=Sauvignon_Blanc"

      $.ajax({
        url: wQueryURL,
        method: "GET",
        headers: { 'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba' }
      }).then(function (response) {

        var wResults= response;
        for(var n=0; n<wResults.length; n++){
        var wineDiv = $("<div>");
        var p = $("<p>").text("Recommended Wine: " + wResults[n].wine);
        
        wineDiv.append(p);
        $("#wine-demo").append(wineDiv);
        }
        console.log(wResults[n].results.wine);
      });
      
    } else if ((Pinotmatches > Blancmatches) && (Pinotmatches > Syrahmatches) && (Pinotmatches > Merlotmatches) && (Pinotmatches > Cabernetmatches) && (Pinotmatches > Chardonnaymatches)) {
      wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=Pinot_Noir"
      $.ajax({
        url: wQueryURL,
        method: "GET",
        headers: { 'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba' }
      }).then(function (response) {
        console.log(response);
      });
    } else if ((Syrahmatches > Blancmatches) && (Syrahmatches > Pinotmatches) && (Syrahmatches > Merlotmatches) && (Syrahmatches > Cabernetmatches) && (Syrahmatches > Chardonnaymatches)) {
      wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=Syrah"
      $.ajax({
        url: wQueryURL,
        method: "GET",
        headers: { 'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba' }
      }).then(function (response) {
        console.log(response);
      });
    } else if ((Merlotmatches > Blancmatches) && (Merlotmatches > Pinotmatches) && (Merlotmatches > Syrahmatches) && (Merlotmatches > Cabernetmatches) && (Merlotmatches > Chardonnaymatches)) {
      wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=Merlot"
      $.ajax({
        url: wQueryURL,
        method: "GET",
        headers: { 'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba' }
      }).then(function (response) {
        console.log(response);
      });
    } else if ((Cabernetmatches > Blancmatches) && (Cabernetmatches > Pinotmatches) && (Cabernetmatches > Syrahmatches) && (Cabernetmatches > Merlotmatches) && (Cabernetmatches > Chardonnaymatches)) {
      wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=Cabernet_Sauvignon"
      $.ajax({
        url: wQueryURL,
        method: "GET",
        headers: { 'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba' }
      }).then(function (response) {
        console.log(response);
      });
    } else if ((Chardonnaymatches > Blancmatches) && (Chardonnaymatches > Pinotmatches) && (Chardonnaymatches > Syrahmatches) && (Chardonnaymatches > Merlotmatches) && (Chardonnaymatches > Cabernetmatches)) {
      wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=Chardonnay"
      $.ajax({
        url: wQueryURL,
        method: "GET",
        headers: { 'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba' }
      }).then(function (response) {

        console.log(response);
      });
    } else {
      return;
    }
  }
  getWine();

  // wdiv = $("<div class='card' id='wine'");
  // var recWine = $("<div class='card-body px-5'>");
  // recWine.append("<a href='" + response.url + "' target='blank' class='card-title'>" + response + "</a>");
  // wdiv.append(recWine);
  // $("#rec-demo").append(wdiv);


  // var max= function(wineMatches) {
  //   maxNum= wineMatches[0];
  //   for(var l=0; l<wineMatches.length; l++) {
  //     if(wineMatches[l]> maxNum) {
  //       maxNum= wineMatches[l];
  //     }
  //   }
  //   return maxNum;
  //   // wineMatchNum = maxNum;
  // }
  // console.log(max(wineMatches));
  // if (ingredientLines === "SauvignonBlanc") {
  //   wQueryURL.append("sauvignon_blanc");
  // } else if (ingredientLines === "PinotNoir") {
  //   wQueryURL.append("pinot_noir");
  // } else if (ingredientLines === "Syrah") {
  //   wQueryURL.append("syrah");
  // } else if (ingredientLines === "Merlot") {
  //   wQueryURL.append("merlot");
  // } else if (ingredientLines === "CabernetSauvignon") {
  //   wQueryURL.append("cabernet_sauvignon");
  // } else if (ingredientLines === "Chardonnay") {
  //   wQueryURL.append("chardonnay");
  // };
  // console.log(wQueryURL);
  // // $("#paired-wine")
  // // $("#page1").hide();
  // // $("#page2").hide();
  // // $("#page3").show();
});


  //=========================================//
 //----------------Database-----------------//
//=========================================//
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

var connectedRef = db.ref(".info/connected");


connectedRef.on("value", function(snap) {


  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});
