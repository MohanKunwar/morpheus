import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
export class GoogleMap extends Component {
  render() {
    return (
      <div className="googlemap">
      <Map
        google={this.props.google}
        mapTypeControl={this.props.controls}
        minZoom={3}
        initialCenter={{
         lat: this.props.latitude,
         lng: this.props.longitude
        }}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQXs6SSkekqQAd0__Qyu8AzkNpABkPzgg'
})(GoogleMap);