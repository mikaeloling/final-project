import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import axios from 'axios';

const ManageCafesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
    height: 100%;
    margin: 20px 0;

    h2 {
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



const ManageCafes = () => {
    const [cafes, setCafes] = useState([]);
        const [currentCafe, setCurrentCafe] = useState({

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
        fetch('http://localhost:3000/cafes')
            .then(response => response.json())
            .then(data => {
                setCafes(data);
            })
            .catch(error => {
                console.error('Error fetching cafes:', error);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentCafe({
            ...currentCafe,
            [name]: value,
        });
    };



    const handleUpdate = (event) => {
        event.preventDefault();
        fetch('localhost:3000/cafes', {
            method: 'PUT',
            body: JSON.stringify(cafes),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {

                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleDelete = (event) => {
        event.preventDefault();
        fetch('localhost:3000/cafes', {
            method: 'DELETE',
            body: JSON.stringify(cafes),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {

                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }




  return (
    <ManageCafesContainer>
        <h2>Manage Cafes</h2>

      {cafes.map((cafe) => (
        <div key={cafe._id}>
            <p>{cafe.name}</p>
            <p>{cafe.address}</p>
            <p>{cafe.city}</p>
            <p>{cafe.zip}</p>
            <p>{cafe.country}</p>
            <p>{cafe.website}</p>
            <p>{cafe.hours}</p>
            <p>{cafe.menu}</p>
            <p>{cafe.photos}</p>
            <p>{cafe.tags}</p>
            <p>{cafe.lat}</p>
            <p>{cafe.lng}</p>
            <p>{cafe.free_wifi}</p>
            <p>{cafe.coffee_refill_included}</p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
      ))}

      <form onSubmit={handleUpdate}>

        <label htmlFor="name">Cafe Name</label>
        <input
          type="text"
          name="name"
          value={currentCafe.name}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={currentCafe.address}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={currentCafe.city}
          onChange={handleChange}
        />
        <label htmlFor="zip">Zip</label>
        <input
          type="text"
          name="zip"
          value={currentCafe.zip}
          onChange={handleChange}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={currentCafe.country}
          onChange={handleChange}
        />
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          value={currentCafe.website}
          onChange={handleChange}
        />
        <label htmlFor="hours">Hours</label>
        <input
          type="text"
          name="hours"
          value={currentCafe.hours}
          onChange={handleChange}
        />
        <label htmlFor="menu">Menu</label>
        <input
          type="text"
          name="menu"
          value={currentCafe.menu}
          onChange={handleChange}
        />
        <label htmlFor="photos">Photos</label>
        <input
          type="text"
          name="photos"
          value={currentCafe.photos}
          onChange={handleChange}
        />
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          value={currentCafe.tags}
          onChange={handleChange}
        />
        <label htmlFor="lat">Latitude</label>
        <input
          type="text"
          name="lat"
          value={currentCafe.lat}
          onChange={handleChange}
        />
        <label htmlFor="lng">Longitude</label>
        <input
          type="text"
          name="lng"
          value={currentCafe.lng}
          onChange={handleChange}
        />
        <label htmlFor="free_wifi">Free Wifi?</label>
        <input
          type="text"
          name="free_wifi"
          value={currentCafe.free_wifi}
          onChange={handleChange}
        />
        <label htmlFor="coffee_refill_included">Coffee Refill Included?</label>
        <input
          type="text"
          name="coffee_refill_included"
          value={currentCafe.coffee_refill_included}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
        </form>

        <button onClick={handleDelete}>Delete</button>

    </ManageCafesContainer>
  );
};

ManageCafes.propTypes = {
    cafe: PropTypes.object,
    setCafe: PropTypes.func,
    handleUpdate: PropTypes.func,
    handleDelete: PropTypes.func,


};



export default ManageCafes;
