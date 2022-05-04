//search variables- Left column
var searchInput = document.getElementById("searchInput")
var searchBtn = document.getElementById("searchBtn")
var previousSearch = document.getElementById("historyBtn")

var weatherUrlroot = "https://api.openweathermap.org"
var apiKey = "34a0f8eac9f57de331cd322101c91945"
//var apiUrl = `${weatherUrlroot}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
// contains list (empty until given event)
var searchHistory = [];
// returns local storage search history
function getItems() {
    var storedCities = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedCities !== null) {
        searchHistory = storedCities;
    };
     // lists up to 8 locations
    for (i = 0; i < searchHistory.length; i++) {
        if (i == 8) {
            break;
          }
        //  creates links/buttons https://getbootstrap.com/docs/4./components/list-group/
        cityListButton = $("<a>").attr({
            class: "list-group-item list-group-item-action",
            href: "#"
        });
        // appends history as a button below the search field
        cityListButton.text(searchHistory[i]);
        $(".list-group").append(cityListButton);
    }
};
