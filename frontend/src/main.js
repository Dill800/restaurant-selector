import React, {Component} from 'react'
import axios from 'axios'

class Main extends Component {

    constructor() {
        super();
        this.state = {
            latitude: 0,
            longitude: 0,
            resData: []
        }
    }

    async getPosition() {

        console.log('SDFSD');

        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
            console.log("Vals Updated");
            return;
        },
        err => {
            console.err('There was an error');
        }
        );

    }

    componentDidMount() {

        const config = {
            headers: {
                "user-key": 'c6e168f7acb7f74e5ce9d91be3f30f9e',
                "content-type": "application/json"
            } 
        }


        this.getPosition().then(() => {
            
            let params = '?lat='+this.state.latitude+'&lon='+this.state.longitude;

            console.log(params);

            axios.get("https://developers.zomato.com/api/v2.1/geocode" + params, config, {})
            .then((apiRes) => {
                console.log("request recieved2");
    
                apiRes.data.nearby_restaurants.map(restaurant=> {
                    console.log(this.state.latitude+"***"+this.state.longitude);
                    let newArr = this.state.resData.concat(restaurant.restaurant.name);
                    this.setState({resData: newArr});
                    console.log(restaurant.restaurant.name); 
                });
    
                //this.setState({resData: JSON.parse(apiRes.data.nearby_restaurants)})
            }, (error) => {
                console.err("an error was recorded");
                console.log(error);
            });

        });

    }

    render() {
        return (
            <div>
                <p>{this.state.latitude}</p>
                <p>{this.state.resData}d</p>
                <p>{this.state.resData}</p>
            </div>
        )
    }

}
export default Main;
