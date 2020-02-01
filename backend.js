let configer = require('./config');

let express = require('express');

let app = express();
let url = require('url');
let axios = require('axios');

// Will always return 
app.get('/hi', (req, res) => {

    console.log("SDKFLJSLFJSLDf");

    let params = url.parse(req.url, true).search;

    const config = {
        headers: {
            "user-key": configer.apikey,
            "content-type": "application/json"
        } 
    }

    /*navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
    },
    (err) => {
        console.err("error");
    });
*/
    params = '?lat=29.651634&lon=-82.324829';

    axios.get("https://developers.zomato.com/api/v2.1/geocode" + params, config, {})
    .then((apiRes) => {
        console.log("request recieved");
        res.send(apiRes.data.nearby_restaurants[0]);
    }, (error) => {
        console.err("an error was recorded");
        console.log(error);
    });

    //res.send(str);

});

app.listen(4000, () => {console.log("this server is running")});