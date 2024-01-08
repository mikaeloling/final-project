import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { set } from 'mongoose';

const Map = ({ selectedCafe, setSelectedCafe, scrollToCafe }) => {
  const [cafes, setCafes] = useState([]);
  const [selectedMarker , setSelectedMarker] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const mapRef = useRef(null);

  useEffect(() => {
    // Fetch cafes from the API
    fetch('http://localhost:3000/cafes')
      .then(response => response.json())
      .then(data => {
        setCafes(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCafe) {
      const selected = cafes.find((cafe) => cafe._id === selectedCafe);
      setSelectedMarker(selected);
      setShowInfoWindow(true);
    } else {
      setShowInfoWindow(false);
    }
    }, [selectedCafe, cafes]);

  const mapStyles = {        
    height: "60vh",
    width: "100%"
  };
  
  const defaultCenter = {
    //Tallinn
    lat: 59.436962, lng: 24.753574
  };

  return (
    <div ref = {mapRef}> 
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {cafes.map((cafe) => (
          
          <Marker 
            key={cafe._id} 
            position={{ lat: cafe.lat, lng: cafe.lng }} 
            icon={cafe._id === selectedCafe ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"} 
            onClick={() => {
              console.log("marker selected", cafe);
              setSelectedCafe(cafe._id)
              setSelectedMarker(cafes.find((cafe) => cafe._id === selectedCafe));
              showInfoWindow ? setShowInfoWindow(false) :
              setShowInfoWindow(true);

              if (selectedMarker === cafe) {
                setSelectedMarker(null);
                setShowInfoWindow(false);
               
            } 
            }
            }
          />

        ))} 


        {selectedMarker && (

          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h2>{selectedMarker.name}</h2>
              <p>{selectedMarker.address}</p>
              <p>Opening hours: {selectedMarker.hours}</p>
              <a href = {selectedMarker.website}>Website</a>
              <button onClick={() => {
                const index = cafes.findIndex(cafe => cafe._id === selectedCafe);
                scrollToCafe(index);
              }}>Back to List</button>
        </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

Map.propTypes = {
  selectedCafe: PropTypes.string,
  setSelectedCafe: PropTypes.func,
  showInfoWindow: PropTypes.bool, 
  setShowInfoWindow: PropTypes.func,
};

export default Map;