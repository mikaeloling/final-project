import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';

const API_URL = 'https://final-project-backend-jos4.onrender.com';

const StyledCafeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;

const StyledCafeItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 20px;
  padding: 20px 10px;
  justify-content: center;
  box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease;
  border-radius: 10px;
  &:last-child {
    margin-bottom: 120px;
  }
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
   
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: #333;
      color: #fff;
      transition: 0.7s ease;
   
    }
  }

  img {
    border-radius: 10px;
    max-width: 90%;
    max-height: 200px;
    margin-left: 20px;
    object-fit: cover;
    @media (max-width: 768px) {
      
      margin-left: 0;
      margin-top: 20px;
    }  
  }
`;

const CafeList = ({ onShowOnMap, cafeRefs }) => {
  const [cafes, setCafes] = useState([]);
  

  useEffect(() => {
  
    fetch (`${API_URL}/cafes`)
      .then(response => response.json())
      .then(data => {
        setCafes(data);
      })
      .catch(error => {
        console.error('Error fetching cafes:', error);
      });
  }, []);

  return (
    <>
    <div>
      <StyledCafeList>
      {cafes.map((cafe, index) => (
          <StyledCafeItem key={cafe._id} ref={el => cafeRefs.current[index] = el}>
              <div>
              <h2>{cafe.name}</h2>
                <p>Address: {cafe.address}</p>
                <p>Opening hours: {cafe.hours}</p>
                <p>Free wifi? {cafe.free_wifi}</p>
                <p>Coffee refill included? {cafe.coffee_refill_included} </p>
                <button onClick={() => 
                  onShowOnMap(cafe)}> Show on Map
                </button> 
              </div>
              <img src={cafe.photos[0]} alt={cafe.name} width="300px" height="200px" />
            </StyledCafeItem>
        ))}
      </StyledCafeList>
    </div>
    </>
  )
}

CafeList.propTypes = {
  selectedCafe: PropTypes.object,
  showInfoWindow: PropTypes.bool,
  cafeRefs: PropTypes.object,
  showMap: PropTypes.func,
  selectedMarker: PropTypes.object,
  handleShowOnMapClick: PropTypes.func,
  handleMarkerClick: PropTypes.func,
  onShowOnMap: PropTypes.func,
};

export default CafeList;