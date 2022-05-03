//search variables- Left column
var searchInput = document.getElementById("searchInput")
var searchBtn = document.getElementById("searchBtn")
var previousSearch = document.getElementById("historyBtn")

var weatherUrlroot = "https://api.openweathermap.org"
var apiKey = "34a0f8eac9f57de331cd322101c91945"
//var apiUrl = `${weatherUrlroot}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;


var getWeatherData = function() {
    fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=34a0f8eac9f57de331cd322101c91945");
    
  };
  
  getWeatherData();


  