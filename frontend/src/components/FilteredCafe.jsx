// import React, { useState, useEffect } from 'react';

// const FilteredCafe = ({ cafes }) => {
//   const [filteredCafes, setFilteredCafes] = useState([]);

//   useEffect(() => {
//     setFilteredCafes(cafes);
//   }, [cafes]);

//   const filterCafes = (coffeeRefill, wifi) => {
//     const result = cafes.filter(cafe => {
//       let matches = true;
//       if (coffeeRefill !== undefined) {
//         matches = matches && cafe.coffee_refill_included === coffeeRefill;
//       }
//       if (wifi !== undefined) {
//         matches = matches && cafe.free_wifi === wifi;
//       }
//       return matches;
//     });
//     setFilteredCafes(result);
//   };

//   // Render the filtered cafes
//   return (
//     <div>
//       {filteredCafes.map(cafe => (
//         <div key={cafe.id}>{cafe.name}</div>
//       ))}
//     </div>
//   );
// };

// export default FilteredCafe;