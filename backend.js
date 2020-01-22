let express = require('express');

let app = express();
let url = require('url');
let axios = require('axios');

app.get('/hi', async (req, res) => {

    console.log("SDKFLJSLFJSLDf");

    let params = url.parse(req.url, true).search;

    const config = {
        headers: {
            "user-key": "c6e168f7acb7f74e5ce9d91be3f30f9e",
            "content-type": "application/json"
        } 
    }

    let axiosResponse = await axios.get("https://developers.zomato.com/api/v2.1/geocode" + params, config, {});

    console.log(axiosResponse.status);

    let str = [];
    axiosResponse.data.nearby_restaurants.map(restaurant => {
        str += restaurant.restaurant.name + " | ";
    })

    res.send(str);

});

app.listen(4000);