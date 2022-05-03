//Variables for site
//api info
var weatherUrlroot = "https://api.openweathermap.org"
var apiKey = "34a0f8eac9f57de331cd322101c91945"
var searchInput = document.getElementById("searchInput")
var apiUrl = `${weatherUrlroot}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
//var weatherCity = "/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
// search buttons
var searchInput = document.getElementById("searchInput")
var searchBtn = document.getElementById("searchBtn")
var previousSearch = document.getElementById("historyBtn")

// search history 
var searchHistory = [];

// returns local storage search history
$("#searchBtn").click(function(){
    var inputCity = document.getElementById("searchInput").value
    localStorage.setItem("city", JSON.stringify(inputCity))
})
var outputCity = JSON.parse(localStorage.getItem("city"))
document.getElementById("searchInput").value = output9am;

     // lists up to 8 locations
    for (i = 0; i < searchHistory.length; i++) {
        if (i == 8) {
            break;
          }
        // appends history as a button below the search field
        previousSearch.text(searchHistory[i]);
        $(".list").append(previousSearch);
 
//fetch weather data

function fetchWeather(location) {
    var city = location.name;
    var {lon} = location;
    var {lat} = location;
    var apiUrl = `${weatherUrlroot}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
    //var citySearch = `https://api.openweathermap.org/data/2.5/weather?q=$minneapolis&appid=${apiKey}`
    /*fetch (citySearch) 
        .then(function(response) {
            return response.json()
        })*/
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data) {
              console.log(data);
            });
        then(function(data) {
            //function to render data
            console.log(data) 
        })
        .catch(function(error) {
            console.error(error);
        })
});
function handleSearchFormSubmit(e) {
    // Don’t continue if there is nothing in the search form
    if (!searchInput.value) {
      return;
    }
    e.preventDefault();
    var search = searchInput.value.trim();
    fetchCoords(search);
    searchInput.value = "";
  }
function fetchCoordinates (search) {
    var apiUrl = `${weatherUrlroot}/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`;
    fetch(apiUrl) 
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            if (!data[0]) {
                alert("location cannot be found")
            }
            else {
                appendtohistory(search);
                fetchWeather(data[0])
            }

        })
        .catch(function(error){
            console.error(error)
        })
}

function renderData(city,data){
    
}
fetchWeather()

// searches and adds to history(event)
$("#searchBtn").click(function() {
    city = $(searchInput).val().trim();
    getData();
    var checkArray = searchHistory.includes(city);
    if (checkArray == true) {
        return
    }
    else {
        searchHistory.push(city);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        var cityListButton = $("<a>").attr({
            // list-group-item-action keeps the search history buttons consistent
            class: "list-group-item list-group-item-action",
            href: "#"
        });
        cityListButton.text(city);
        $(".list-group").append(cityListButton);
    };
});
// listens for action on the history buttons(event)
$(".list-group-item").click(function() {
    city = $(this).text();
    getData();
});
// capitalize city name
$("#searchCity").keypress(function () {  
    var _val = $("#searchCity").val();  
    var _txt = _val.charAt(0).toUpperCase() + _val.slice(1);  
    $("#searchCity").val(_txt);
});

// clear all the local storage(not working after a page refresh)
$('#clear').click( function() {
    window.localStorage.clear();
    location.reload();
    return false;
    });






/*variable for all readME display items
create elements card to hold data corresponding to variables
create card-body
create element then create container 
appendchild 
function for 5 day- current, temp, humidity, wind speed, UV index*/

