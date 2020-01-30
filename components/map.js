import React from 'react';
import L from 'leaflet';

export default class Map extends React.Component {
    componentDidMount() {
        // create map
        this.map = L.map('map', {
            center: [52.2356793, 21.0158183],
            zoom: 20,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
    }

    render() {
        return <div id="map"></div>
    }
}


