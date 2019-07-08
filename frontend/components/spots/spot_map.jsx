import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
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