import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {

    componentDidMount() {
        const mapOptions = {
            center: { lat: 33.873415, lng: -115.9009923 }, // this is Joshua Tree
            zoom: 9
        };

        this.props.fetchSpots();

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.map = new google.maps.Map(document.getElementById('test'), mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.spots);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.spots);
    }

    render() {
        return (
            <div className='map-container' ref={map => this.mapNode = map}>

            </div>
        )
    }

}

export default SpotMap;