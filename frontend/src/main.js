import React, {Component} from 'react'

class Main extends Component {

    constructor() {
        super();
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }

    getPosition() {

        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        },
        err => {
            console.err('There was an error');
        }
        );

    }

    componentDidMount() {
        this.getPosition();
    }

    render() {
        return (
        <p>{this.state.latitude}</p>
        )
    }

}
export default Main;