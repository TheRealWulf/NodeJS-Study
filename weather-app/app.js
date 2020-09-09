const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=e9d0ddc1da3a4f450a3e7e4e0c247501&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log("The weather is currently a " + response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out! It feels like " + response.body.current.feelslike + " degrees.");
});

