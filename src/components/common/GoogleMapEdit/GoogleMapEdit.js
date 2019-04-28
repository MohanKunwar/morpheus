import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import {GoogleComponent} from 'react-google-location'
import './GoogleMapEdit.css'
const MapContainer = ({google, lat, lng, updateGeoLocation}) => {
    return (
      <div className="google_map_edit">
      <GoogleComponent 
      apiKey= "AIzaSyAQXs6SSkekqQAd0__Qyu8AzkNpABkPzgg"
      coordinates= {true}
      />
        <Map 
       google={google}
          style={{width: "100%",  height: "320px", position: "relative"}}
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={17}
          initialCenter= {{
            lat: lat,
            lng: lng
          }}
          mapTypeControl= {false}
          >
        <Marker
        name={'Current location'} 
        position={{
            lat: lat,
            lng: lng
          }}
        draggable= {true}
        onDragend= {(map,marker,e) => updateGeoLocation(e.latLng.lat(), e.latLng.lng())}
        />
      </Map>
      </div>
    )
  }

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAQXs6SSkekqQAd0__Qyu8AzkNpABkPzgg")
})(MapContainer)