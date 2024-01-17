import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';

const mapStyles = {        
  height: "60vh",
  width: "100%"
};



const MapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;

  
`;


const CafeImg = styled.div`
  
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 400px
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`;

const Infotext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: #000000;
    text-decoration: none;
    font-weight: 700;
    margin: 10px;
  }
  h2 {
    font-weight: 700;
    
  }
  p {
    font-weight: 400;
  }

  
`;


const defaultCenter = {
  lat: 59.436962, lng: 24.753574
};

const Map = ({ selectedCafe, showInfoWindow }) => { // Destructure props here
  // Removed the fetching of cafes as it's not used in the current scope of the component

  return (
    <>
    <MapContainer>
    <CafeImg>
      <img src={selectedCafe.photos[0]} alt={selectedCafe.name} />
    </CafeImg>
    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
      {selectedCafe && (
        <Marker
          key={selectedCafe._id}
          position={{ lat: selectedCafe.lat, lng: selectedCafe.lng }}
          icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        />
      )}

      {showInfoWindow && selectedCafe && (
        <InfoWindow
          position={{ lat: selectedCafe.lat, lng: selectedCafe.lng }}
          onCloseClick={() => {/* Functionality to close InfoWindow */}}
        >
          <Infotext>
            <h2>{selectedCafe.name}</h2>
            <p>{selectedCafe.address}</p>
            <p>Opening hours: {selectedCafe.hours}</p>
            <a href={selectedCafe.website}>Website</a>
          </Infotext>
        </InfoWindow>
      )}
    </GoogleMap>
    
    </MapContainer>
    </>
  );
};



export default Map;
