let configer = require('./config');

let express = require('express');

let app = express();
let url = require('url');
let axios = require('axios');

app.get('/hi', (req, res) => {

    console.log("SDKFLJSLFJSLDf");

    let params = url.parse(req.url, true).search;

    const config = {
        headers: {
            "user-key": configer.apikey,
            "content-type": "application/json"
        } 
    }

    params = '?lat=26.7&lon=80.33';

    let str = [];

    axios.get("https://developers.zomato.com/api/v2.1/geocode" + params, config, {})
    .then((response) => {
        console.log("request recieved");
        response.data.nearby_restaurants.map(restaurant => {
            str += restaurant.restaurant.name + " | ";
        })
        res.send(str);
    }, (error) => {
        console.log("an error was recorded");
        console.log(error);
    });

    //res.send(str);

});

app.listen(4000, () => {console.log("this server is running")});