import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


const Map = ({ selectedCafe, setSelectedCafe  }) => {
  const [cafes, setCafes] = useState([]);
  const [selectedMarker , setSelectedMarker] = useState(null);

  useEffect(() => {
    // Fetch cafes from your API
    fetch('http://localhost:3000/cafes')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data
        setCafes(data);
      });
  }, []);

  const mapStyles = {        
    height: "70vh",
    width: "100%"
  };
  
  const defaultCenter = {
    //Tallinn
    lat: 59.436962, lng: 24.753574
  };

  return (
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
            onClick={() => setSelectedCafe(cafe._id)}
          />
        ))}

{selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h2>{selectedMarker.name}</h2>
              <p>{selectedMarker.address}</p>
              {/* Add more details here */}
            </div>
          </InfoWindow>
        )}
        
      </GoogleMap>
    </LoadScript>
  );
};

Map.propTypes = {
  selectedCafe: PropTypes.string,
  setSelectedCafe: PropTypes.func.isRequired,
};

export default Map;