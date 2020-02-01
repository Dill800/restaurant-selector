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

    componentDidMount() {

        // Axios config
        const config = {
            headers: {
                "user-key": 'c6e168f7acb7f74e5ce9d91be3f30f9e',
                "content-type": "application/json"
            } 
        }

        // Update state with current lat and longitude
        navigator.geolocation.getCurrentPosition(position => {

            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });

            let params = '?lat='+this.state.latitude+'&lon='+this.state.longitude;

            axios.get("https://developers.zomato.com/api/v2.1/geocode" + params, config, {})
            .then((apiRes) => {

                apiRes.data.nearby_restaurants.map(restaurant=> {
                    
                    let newArr = this.state.resData.concat(restaurant.restaurant.name);
                    this.setState({resData: newArr});
                   
                });

            }, (error) => {
                console.log(error);
            });

        },
        err => {
            console.log('There was an error');
        }
        );



    }

    render() {
        return (
            <div>
                <p>{this.state.latitude}</p>
                <p>{this.state.resData}</p>
            </div>
        )
    }

}
export default Main;
