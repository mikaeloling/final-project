// import { set } from "mongoose";
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCafeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCafeItem = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease;
  border-radius: 10px;

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
`;


const CafeList = ({setSelectedCafe }) => {
  const [cafes, setCafes] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/cafes')
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
      {cafes.map((cafe) => (
        
          <StyledCafeItem key={cafe._id}>
              <h2>{cafe.name}</h2>
                <p>Address: {cafe.address}</p>
                <p>Opening hours: {cafe.hours}</p>
                <p>Free wifi? {cafe.free_wifi}</p>
                <p>Coffee refill included? {cafe.coffee_refill_included} </p>
                <button onClick={() => setSelectedCafe(cafe._id)}>Show on Map</button>
            </StyledCafeItem>
        ))}
      </StyledCafeList>
    </div>
    </>
  )
}

CafeList.propTypes = {
  selectedCafe: PropTypes.string,
  setSelectedCafe: PropTypes.func,
  showInfoWindow: PropTypes.bool,
  setShowInfoWindow: PropTypes.func,
};

export default CafeList;