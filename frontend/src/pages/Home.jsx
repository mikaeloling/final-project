import Map from '../components/Map';
import CafeList from '../components/CafeList';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import  { LoadScript } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const AdBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #f0f0f0;


  //make the adbannercontainer float at the bottom of any screen desktop/tablet/mobile (sticky footer)
  position: fixed;
  bottom: 0;
`;

const AdBanner = styled.div`
  width: 728px;
  height: 90px;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.05);
`;

const Home = () => {
  console.log('rendering Home')

 
  
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(true);
  
  const handleShowOnMap = (cafe) => {
    console.log("selected Cafe for Map", cafe); 
    setSelectedCafe(cafe);
    setSelectedMarker(cafe);
    setShowInfoWindow(true);
    setIsMapModalOpen(true);

  };
  
  // const setShowInfoWindow = (cafe) => {
  //   setSelectedCafe(cafe);
  //   setIsMapModalOpen(true);
  // }

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  const mapRef = useRef();
  const cafeRefs = useRef({});
 
  useEffect (() => {
    Modal.setAppElement('body');

  }
  , []);

  return (
    <>
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}> 
    <NavBar/>

    <Modal isOpen={isMapModalOpen} onRequestClose={closeMapModal}>
    <button onClick={closeMapModal}>Close</button>
    <div ref={mapRef}> </div>
    {selectedMarker && selectedCafe &&(
      <div>
        <h2>{selectedMarker.name}</h2>
        <p>{selectedMarker.address}</p>
        <p>Open: {selectedMarker.hours}</p>

      </div>
    )}
    <Map 
    // setSelectedMarker={setSelectedMarker}
    selectedMarker={selectedMarker}
    showInfoWindow={showInfoWindow} 
    selectedCafe={selectedCafe} 
    // setSelectedCafe={setSelectedCafe} 
    // scrollToCafe={scrollToCafe}
    // setShowInfoWindow={setShowInfoWindow}
    />
    </Modal>
    <CafeList
    onShowOnMap={handleShowOnMap} 
    selectedCafe= {selectedCafe}
    selectedMarker= {selectedMarker}
    showInfoWindow={showInfoWindow}
    cafeRefs={cafeRefs} 
    // setSelectedMarker={setSelectedMarker} 
    // selectedMarker={selectedMarker?._id} 
    // setShowInfoWindow={setShowInfoWindow} 
    // showMap={showMap} 
    
    // setSelectedCafe={setSelectedCafe} 
    />
    {/* setSelectedCafe={setSelectedCafe} */}
    {/* cafeRefs={cafeRefs} */}

    

    {/* <AdBannerContainer>
    <AdBanner>PLACE YOUR AD HERE</AdBanner>
    </AdBannerContainer> */}

</LoadScript>
    
    </>
  )
}

Home.propTypes = {
  selectedCafe: PropTypes.object,
  // setSelectedCafe: PropTypes.func,
  showInfoWindow: PropTypes.bool,
  // setShowInfoWindow: PropTypes.func,
  cafeRefs: PropTypes.object,
  showMap: PropTypes.func,
  selectedMarker: PropTypes.object,
  // setSelectedMarker: PropTypes.func,
  handleShowOnMapClick: PropTypes.func,
  handleMarkerClick: PropTypes.func,
  onShowOnMap: PropTypes.func,
  
};


export default Home;
  