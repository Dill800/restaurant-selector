import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react'

function Map(props) {



    return (
    
        <div>

            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyAc9WsXlglce1QovIPemIlIlU3kKzND3wI'}}
            defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
            defaultZoom={11}>

                


            </GoogleMapReact>

        </div>

    );

}

export default Map;