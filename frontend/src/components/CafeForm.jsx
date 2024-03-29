import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CafeFormContainer = styled.div`
    height: 50%;
    padding-bottom: 50px;

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        align-items: center;
        justify-items: start;
        padding: 60px;
    }
    label {
        grid-column: 1 / 2;
        font-size: 20px;
        align-self: flex-start;
    }
    input {
        grid-column: 2 / 3;
        width: 100%;
        height: 20px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #333;
        margin-bottom: 10px;  
    }
    button {
        grid-column: 1 / 3;
        width: 100%;
        height: 50px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #333;
        background: #333;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        margin-top: 10px;
        cursor: pointer;
    }
`;

const CafeForm = ({ onSubmit, initialCafeData }) => {
  const [cafe, setCafe] = useState({

    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    website: '',
    hours: '',
    menu: '',
    photos: '',
    tags: '',
    lat: '',
    lng: '',
    free_wifi: '',
    coffee_refill_included: '',
  });



  useEffect(() => {
    if (initialCafeData) {
        setCafe(initialCafeData);
    }
    }, [initialCafeData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCafe({ ...cafe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(cafe);

  };

  return (
    <CafeFormContainer>
    <h2>Add a Cafe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Cafe Name</label>
        <input
          type="text"
          name="name"
          value={cafe.name}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={cafe.address}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={cafe.city}
          onChange={handleChange}
        />
        <label htmlFor="zip">ZIP</label>
        <input
          type="text"
          name="zip"
          value={cafe.zip}
          onChange={handleChange}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={cafe.country}
          onChange={handleChange}
        />
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          value={cafe.website}
          onChange={handleChange}
        />
        <label htmlFor="hours">Hours</label>
        <input
          type="text"
          name="hours"
          value={cafe.hours}
          onChange={handleChange}
        />
        <label htmlFor="menu">Menu</label>
        <input
          type="text"
          name="menu"
          value={cafe.menu}
          onChange={handleChange}
        />
        <label htmlFor="photos">Photos</label>
        <input
          type="text"
          name="photos"
          value={cafe.photos}
          onChange={handleChange}
        />
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          value={cafe.tags}
          onChange={handleChange}
        />
        <label htmlFor="lat">Latitude</label>
        <input
          type="text"
          name="lat"
          value={cafe.lat}
          onChange={handleChange}
        />
        <label htmlFor="lng">Longitude</label>
        <input
          type="text"
          name="lng"
          value={cafe.lng}
          onChange={handleChange}
        />
        <label htmlFor="free_wifi">Free Wifi?</label>
        <input
          type="text"
          name="free_wifi"
          value={cafe.free_wifi}
          onChange={handleChange}
        />
        <label htmlFor="coffee_refill_included">Coffee Refill Included?</label>
        <input
          type="text"
          name="coffee_refill_included"
          value={cafe.coffee_refill_included}
          onChange={handleChange}
        />


        <button type="submit">Submit</button>
      </form>
    </CafeFormContainer>

  );
};

CafeForm.propTypes = {

    onSubmit: PropTypes.func,
    initialCafeData: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      zip: PropTypes.string,
      country: PropTypes.string,
      website: PropTypes.string,
      hours: PropTypes.string,
      menu: PropTypes.string,
      photos: PropTypes.string,
      tags: PropTypes.string,
      lat: PropTypes.string,
      lng: PropTypes.string,
      free_wifi: PropTypes.string,
      coffee_refill_included: PropTypes.string,
    }),

};

export default CafeForm;
