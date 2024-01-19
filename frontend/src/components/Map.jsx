import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const mapStyles = {   
};

const MapContainer = styled.div`
  padding: 10px 10px;
  height: 100%;
  }
`;
const CafeImg = styled.div` 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  
  }
`;
const MapandImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 100%;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    height: 130%;
    
    grid-gap: 10px;

    & > div:last-child {
      order: 1;
    
    }

    & > div:first-child {
      order: 2;
    }
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

const Map = ({ selectedCafe, showInfoWindow }) => { 

  return (
    <>
    <MapContainer>
    <MapandImg>
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
    </MapandImg>
    </MapContainer>
   
    </>
  );
};

Map.propTypes = {
  selectedCafe: PropTypes.object,
  showInfoWindow: PropTypes.bool,
};

export default Map;
