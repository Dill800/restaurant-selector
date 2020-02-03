import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react'

function Map(props) {



    return (
     
        <div style={{height: '100vh', width: '50vw'}}>   
            {console.log(props.lat + " " + props.lng)}
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyAc9WsXlglce1QovIPemIlIlU3kKzND3wI'}}
            center={{lat: props.lat, lng: props.lng}}
            defaultZoom={17}>
            
            {console.log(typeof(props.lat))}
            </GoogleMapReact>

        </div>

    );

}

export default Map;