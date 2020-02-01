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

    params = '?lat=29.651634&lon=-82.324829';

    axios.get("https://developers.zomato.com/api/v2.1/search?lat=29.6516&lon=-82.3248&radius=3200&start=40&count=20", config, {})
    .then((apiRes) => {
        console.log("request recieved");

        str = "";

            console.log(apiRes.data.restaurants[0].restaurant);

        res.send(str);
    }, (error) => {
        console.err("an error was recorded");
        console.log(error);
    });

    //res.send(str);

});

app.listen(4000, () => {console.log("this server is running")});