import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import {GoogleComponent} from 'react-google-location'
import './GoogleMapEdit.css'
export class MapContainer extends React.Component{
  state={
    lat: this.props.lat || 27.6874,
    lng: this.props.lng || 83.4323
  }
    handleDrag(map, marker, e){
      let lat= e.latLng.lat();
      let lng= e.latLng.lng();
      console.log(lat, lng);
    }
  render() {
    return (
      <div className="google_map_edit">
      <GoogleComponent 
      apiKey= "AIzaSyAQXs6SSkekqQAd0__Qyu8AzkNpABkPzgg"
      coordinates= {true}
      onChange= {(e) => {this.setState({lat: e.coordinates.lat, lng: e.coordinates.lng})}}
      />
        <Map 
       google={this.props.google}
          style={{width: "100%",  height: "320px", position: "relative"}}
          center={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          zoom={17}
          initialCenter= {{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          mapTypeControl= {false}
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAQXs6SSkekqQAd0__Qyu8AzkNpABkPzgg")
})(MapContainer)