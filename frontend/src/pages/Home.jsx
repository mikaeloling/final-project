import Map from '../components/Map';
import CafeList from '../components/CafeList';
import styled from 'styled-components';
import { useState } from 'react';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FlagLine = styled.hr`
  height: 10px;
  background: linear-gradient(to right, #0047AB 33.3%, #000000 33.3%, #000000 66.6%, #FFFFFF 66.6%);
  border: none;
`;

const TowerBanner = styled.div`
  width: 400px;
  height: 600px;
  background: grey;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const SquareBanner = styled.div`
  width: 250px;
  height: 250px;
  background: grey;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

 @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
   display: none;
  }

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
`;


const Home = () => {
  const [selectedCafe, setSelectedCafe] = useState(null);

  return (
    <>
    <FlexContainer>
    <h1>Tallinn Cafe List</h1>
    </FlexContainer>
      <FlagLine/>
      <p>Find your favorite place for remote working</p>
    <AdBannerContainer>
      <AdBanner>Ad Banner</AdBanner>
    </AdBannerContainer>
    <Map selectedCafe={selectedCafe} setSelectedCafe={setSelectedCafe}/>
    <FlexContainer>
    <TowerBanner>Ad Banner</TowerBanner>
    <CafeList selectedCafe={selectedCafe} setSelectedCafe={setSelectedCafe}/>
    <TowerBanner>Ad Banner</TowerBanner>
    </FlexContainer>
    <AdBannerContainer>
    <AdBanner>Ad Banner</AdBanner>
    </AdBannerContainer>
    </>
  )
}

export default Home;
  