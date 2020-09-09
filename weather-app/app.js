const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=e9d0ddc1da3a4f450a3e7e4e0c247501&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current)
});