var weatherUrlroot = "https://api.openweathermap.org"

var apiKey = "34a0f8eac9f57de331cd322101c91945"
var searchInput = document.getElementById("searchinput")

//var weatherCity = "/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

//function 

function fetchWeather(location) {
    var city = location.name;
    var {lon} = location;
    var {lat} = location;
    var apiUrl = `${weatherUrlroot}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
    //var citySearch = `https://api.openweathermap.org/data/2.5/weather?q=$minneapolis&appid=${apiKey}`
    fetch (citySearch) 
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            //function to render data
            console.log(data) 
        })
        .catch(function(error) {
            console.error(error);
        })
}
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

//variable for all readME display items
//create elements card to hold data corresponding to variables
//create card-body
//create element then create container 
//appendchild 
//function for 5 day
