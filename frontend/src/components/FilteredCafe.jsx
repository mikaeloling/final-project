import { useState, useEffect } from 'react';
import styled from 'styled-components';


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


//This component is just a filter for the cafe list, it is not a page. The filter is used on the CafeList page, and the AdminDashboard page. It filters the cafes by the tags that are inside each cafe object.

const FilteredCafe = ({ cafes, tags }) => {

    const [filteredCafes, setFilteredCafes] = useState([]);

    useEffect(() => {
        const filteredCafes = cafes.filter(cafe => {
            let cafeTags = cafe.tags.split(',').map(tag => tag.trim());
            return tags.some(tag => cafeTags.includes(tag));
        });
        setFilteredCafes(filteredCafes);
    }
        , [tags, cafes]);

    return (
        <>
        <StyledCafeList>
            {filteredCafes.map((cafe, index) => (
                <div key={index}>
                    <h2>{cafe.name}</h2>
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
                </div>
            ))}
        </StyledCafeList>
        </>
    )

}

export default FilteredCafe;
