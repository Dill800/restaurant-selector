import React, {Component} from 'react'
import Button from 'react-button-component'
import axios from 'axios'
import Map from './map.js'

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
                console.log(apiRes);
                apiRes.data.restaurants.map(restaurant=> {
                    
                    let newArr = this.state.resData.concat(restaurant.restaurant.name);
                    this.setState({resData: newArr});


                    let menuArr = this.state.menus.concat(restaurant.restaurant.menu_url);
                    console.log(restaurant.restaurant.menu_url);
                    this.setState({menus: menuArr});
                   
                });

                this.setState({
                    currentRest: Math.floor(Math.random() * this.state.resData.length)
                })

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
<<<<<<< HEAD

                <h1>{this.state.resData[this.state.currentRest]}</h1>
=======
                <h1>Current Location: {this.state.resData[this.state.currentRest]}</h1>
>>>>>>> aadc5220c5202089d6f112b3a72d6e822e379620
                <a href={this.state.menus[this.state.currentRest]} target = '_blank'>
                <p>Menu</p>
                </a>
                
<<<<<<< HEAD
                <Button color="primary" onClick={this.onClick}>Get Another Location</Button>
                <Map lat={26} lng={-82}/>
=======
                <Button color="primary" onClick={this.onClick}>New Restaurant</Button>

>>>>>>> aadc5220c5202089d6f112b3a72d6e822e379620
            </div>
        )
    }

}
export default Main;