import React, {Component} from 'react'
import Button from 'react-button-component'
import {Spinner} from 'reactstrap'
import axios from 'axios'
import Map from './map.js'
import './main.css'

class Main extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            latitude: 0,
            longitude: 0,
            currentRest: 0,
            data: [],
            updated: false
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

                this.setState({
                    data: apiRes.data,
                    currentRest: Math.floor(Math.random() * Object.keys(apiRes.data.restaurants).length),
                    updated: true
                })

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
        this.setState({currentRest: Math.floor(Math.random() *  Object.keys(this.state.data.restaurants).length)});
    }


    render() {

        let restName = !this.state.updated ? <Spinner color="secondary" /> : this.state.data.restaurants[this.state.currentRest].restaurant.name;
        let menuName = !this.state.updated ? '' : this.state.data.restaurants[this.state.currentRest].restaurant.menu_url;
        let mapLat = !this.state.updated ? 0 : this.state.data.restaurants[this.state.currentRest].restaurant.location.latitude;
        let mapLng = !this.state.updated ? 0 : this.state.data.restaurants[this.state.currentRest].restaurant.location.longitude;

        return (
            <div>
                
                <div className='row'>
                    <div className='col'>
                        <div className='restText'>

                        <Button disabled={!this.state.updated} color="primary" onClick={this.onClick}>New Restaurant</Button>

                            <h3>Current Location:</h3>
                            <h4>{restName}</h4>
                        </div>
                        
                        <br/>
                        
                        <a href={menuName} target = '_blank'>
                        <p>Menu</p>
                        </a>
                    
                    </div>
                    <div className='col map'>
                        <Map lat={Number(mapLat)} lng={Number(mapLng)}/>
                    </div>
                </div>
            </div>
        )
    }

}
export default Main;