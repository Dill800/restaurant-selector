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
            menus: [],
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

            let params = 'lat='+this.state.latitude+'&lon='+this.state.longitude+'&radius=4800&start=0'

            axios.get("https://developers.zomato.com/api/v2.1/search?" + params, config, {})
            .then((apiRes) => {

                apiRes.data.restaurants.map(restaurant=> {
                    
                    let newArr = this.state.resData.concat(restaurant.restaurant.name);
                    this.setState({resData: newArr});


                    let menuArr = this.state.menus.concat(restaurant.restaurant.menu_url);
                    console.log(restaurant.restaurant.menu_url);
                    this.setState({menus: menuArr});
                   
                });

            }, (error) => {
                console.log(error);
            });

            //https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyAc9WsXlglce1QovIPemIlIlU3kKzND3wI

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
                <a href={this.state.menus[this.state.currentRest]} target = '_blank'>
                <p>Menu</p>
                </a>
                
                <Button color="primary" onClick={this.onClick}>Click Me!</Button>

            </div>
        )
    }

}
export default Main;
