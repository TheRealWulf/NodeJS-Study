const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=e9d0ddc1da3a4f450a3e7e4e0c247501&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log("The weather is currently a " + response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out! It feels like " + response.body.current.feelslike + " degrees.");
});


const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGhlcmVhbHd1bGYiLCJhIjoiY2tldm02MGM4Mmg2NTJzcG4zazFwbW1tcyJ9.SyzMHEh6PXHafMcj-LuypQ"

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
});