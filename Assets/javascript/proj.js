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
    console.log(rResults[0].recipe.ingredientLines);


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
    "<li class='list-group-item'>" + ingredient + "</li>");
  list.push(ingredient);
  console.log(list);
  $("#ingredient-input").val("");
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



var wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine="+vine;

$.ajax({
  url: wQueryURL,
  method: "GET",
  headers: { 'Authorization': 'Token 4d786bd8008d8fed360a5eb1a42ac9970ca664ba' }
}).then(function (response) {

  console.log(response);

});



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

  function getWine (){
    if ((Blancmatches > Pinotmatches) && (Blancmatches > Syrahmatches) && (Blancmatches > Merlotmatches ) && (Blancmatches > Cabernetmatches ) && (Blancmatches > Chardonnaymatches )) {
      wQueryURL = "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?wine=Sauvignon_Blanc"
     
      console.log("Sauvignon Blanc");
    } else {
      return;
    }
  }
  getWine();

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





