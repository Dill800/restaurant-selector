import React, {Component} from 'react'
import Button from 'react-button-component'
import axios from 'axios'

class Main extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            latitude: 0,
            longitude: 0,
            resData: [],
            currentRest: 0
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

    onClick() {
        this.setState({currentRest: Math.floor(Math.random() * this.state.resData.length)});
    }

    render() {
        return (
            <div>

                <h1>Current Location: {this.state.resData[this.state.currentRest]}</h1>
                <Button color="primary" onClick={this.onClick}>Click Me!</Button>

            </div>
        )
    }

}
export default Main;
