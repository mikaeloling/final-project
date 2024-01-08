import Map from '../components/Map';
import CafeList from '../components/CafeList';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

// const HomeContainer = styled.div`
//   align-items: center;
//   justify-content: center;

// `;

const FlexContainer = styled.div`
  display: flex;
  padding: 0px;
  background-color: #f0f0f0;
  color: #333;
  justify-content: center;
  align-items: center;
 

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-right: 10px;
    
  }
  
  p {
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
   
    
  }

`;
const FlagLine = styled.hr`
  height: 10px;
  background: linear-gradient(to right, #0047AB 33.3%, #000000 33.3%, #000000 66.6%, #FFFFFF 66.6%);
  border: none;
`;


const AdBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 20px 0;

  @media (min-width: 1024px) {
    display: none;
  }
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

// const TowerBanner = styled.div`
//   width: 400px;
//   height: 600px;
//   background: grey;
//   margin: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-align: center;
//   position: relative;
// `;


const Home = () => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    if (selectedCafe && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCafe]);
  
  return (
    <>
    <FlexContainer>
    <h1>Tallinn´s Top Cafes</h1>
      <p>Perfect Picks for Remote Professionals</p>
      </FlexContainer>
      <FlagLine/>
    <AdBannerContainer>
      <AdBanner>Ad Banner</AdBanner>
    </AdBannerContainer>
    <div ref={mapRef}> </div>
    <Map selectedCafe={selectedCafe} setSelectedCafe={setSelectedCafe} />
    <CafeList setSelectedCafe={setSelectedCafe} />
    <AdBannerContainer>
    <AdBanner>Ad Banner</AdBanner>
    </AdBannerContainer>
    </>
  )
}

export default Home;
  