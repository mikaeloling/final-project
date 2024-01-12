import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const mapStyles = {        
  height: "60vh",
  width: "100%"
};

const defaultCenter = {
  lat: 59.436962, lng: 24.753574
};

const Map = () => {
  const [cafes, setCafes] = useState(null)
  const [selectedCafe ] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [selectedMarker ] = useState(null);

  useEffect(() => {
    const fetchCafes = async () => {
      const response = await fetch('http://localhost:3000/cafes');
      const data = await response.json();
      setCafes(data);
    };
    fetchCafes();
  }, []);

  useEffect(() => {
    if (selectedCafe) {
      const marker = selectedMarker.current[selectedCafe._id];
      marker.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedMarker, selectedCafe]);

  return (
    <>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
      {/* // only show the marker if the cafe is selected */}

        {cafes?.map((cafe) => (
          <Marker
            key={cafe._id}
            position={{ lat: cafe.lat, lng: cafe.lng }}
            icon={cafes?._id === selectedCafe?._id ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
          
          
          />    
        ))}











        {/* {selectedMarker?.map((selectedCafe) => (
          <Marker
            key={selectedMarker._id}
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            icon={cafes?._id === selectedCafe?._id ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
          />  
        ))} */}

{/* {selectedMarker && selectedCafe &&(
      <div>
        <h2>{selectedMarker.name}</h2>
        <p>{selectedMarker.address}</p>
        <p>Open: {selectedMarker.hours}</p>

      </div>
    )} */}

        {showInfoWindow && selectedCafe && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setShowInfoWindow(false)}
          >
            <div>
              <h2>{selectedMarker.name}</h2>
              <p>{selectedMarker.address}</p>
              <p>Opening hours: {selectedMarker.hours}</p>
              <a href={selectedMarker.website}>Website</a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
};

// Map.propTypes = {
//   selectedCafe: PropTypes.string,
//   setSelectedCafe: PropTypes.func,
//   showInfoWindow: PropTypes.bool,
//   setShowInfoWindow: PropTypes.func,
//   cafeRefs: PropTypes.object,
//   showMap: PropTypes.func,
//   selectedMarker: PropTypes.string,
//   setSelectedMarker: PropTypes.func,
//   handleShowOnMapClick: PropTypes.func,
//   handleMarkerClick: PropTypes.func,
//   onShowOnMap: PropTypes.func,
// };

export default Map;
