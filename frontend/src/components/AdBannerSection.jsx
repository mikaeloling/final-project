import styled from 'styled-components';

const AdBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #f0f0f0;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
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

export const AdBannerSection = () => {
  return (
    <AdBannerContainer>
    <AdBanner>PLACE YOUR AD HERE</AdBanner>
    </AdBannerContainer>
  )
}

export default AdBannerSection