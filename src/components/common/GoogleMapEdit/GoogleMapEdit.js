import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GoogleComponent} from 'react-google-location';
export class MapContainer extends React.Component{
  state={
    lat: 27.6874,
    lng: 83.4323
  }
    handleDrag(map, marker, e){
      let lat= e.latLng.lat();
      let lng= e.latLng.lng();
      console.log(lat, lng);
    }
  render() {
    return (
      <React.Fragment>
      <GoogleComponent 
      apiKey= "AIzaSyAQXs6SSkekqQAd0__Qyu8AzkNpABkPzgg"
      coordinates= {true}
      locationBoxStyle= 'custom-style'
      locationListStyle= 'custom-style-list'
      onChange= {(e) => {this.setState({lat: e.coordinates.lat, lng: e.coordinates.lng})}}
      />
        <Map 
       google={this.props.google}
          style={{width: "100%", height: "310px"}}
          center={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          zoom={17}
          ownClick={this.onMapClicked}
          >
        <Marker
        name={'Current location'} 
        position={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
        draggable= {true}
        onDragend= {this.handleDrag}
        />
      </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAQXs6SSkekqQAd0__Qyu8AzkNpABkPzgg")
})(MapContainer)