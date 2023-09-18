var searchForm = document.querySelector('#search-form');
var btnSearch = document.querySelector('#btn-search');
var searchInput = document.querySelector('#search-input');
var searchHistory = document.querySelector('#search-history');
var currentWeather = document.querySelector('#current-weather');
var iconEl = document.querySelector('#icon');
var days = document.querySelector('#days');
var storedSearches = JSON.parse(localStorage.getItem('searches')) 

if (storedHistory == null) {
    storedHistory = [];
    localStorage.setItem('searches', JSON.stringify(storedHistory));
}

var lat, lon;
getStoredHistory();

function getLocation(event) {
    event.preventDefault();
    var searchCity = searchInput.value.trim();
    var openURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm},US&limit=1&appid=43d36ca9362f387db0e18b387f02181e`

    if (!searchCity){
        return;
    }
    fetch(openURL)
    .then(function (response) {
        if(response.ok){
            response.json().then(function (data) {
                lat = data[0].lat;
                lon = data[0].lon;
                getWeather(lat, lon);
                getForecast(lat, lon);
                addSearchHistory(data[0].name)

            })
        }
    })
}
