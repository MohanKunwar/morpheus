import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 27.686386,
      lng: 83.432426
    },
    zoom: 17,
  };
  renderMarkers(map, maps) {
    return new maps.Marker({
      position: this.props.center,
      map,
    });
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '310px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAQXs6SSkekqQAd0__Qyu8AzkNpABkPzgg' }}
          center={this.props.center}
          zoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
export default GoogleMap;