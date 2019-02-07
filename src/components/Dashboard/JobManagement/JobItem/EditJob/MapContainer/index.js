import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '375px',
};

class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        const points = [{
                lat: 42.02,
                lng: -77.01
            },
            {
                lat: 42.03,
                lng: -77.02
            },
            {
                lat: 41.03,
                lng: -77.04
            },
            {
                lat: 42.05,
                lng: -77.02
            }
        ];

        let bounds = new this.props.google.maps.LatLngBounds();
        for (let i = 0; i < points.length; i++) {
            bounds.extend(points[i]);
        }

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 40.756795,
                    lng: -73.954298
                }}
                bounds={bounds}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MapContainer);