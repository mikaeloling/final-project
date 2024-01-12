    import { useState } from 'react';
    import { InfoWindow } from '@react-google-maps/api';
    
    const CafeMarker = () => {  
    const [selectedCafe, setSelectedCafe] = useState(null);
      return (
        <div>
          {selectedCafe && (
            <InfoWindow
              position={{ lat: selectedCafe.lat, lng: selectedCafe.lng }}
              onCloseClick={() => {
                setSelectedCafe(null);
              }}
            >
                <h2>{selectedCafe.name}</h2>
                <p>{selectedCafe.address}</p>
                <a href = {selectedCafe.website}>Website</a>
                <p>This is the infowindow in cafemarker component</p>
            </InfoWindow>
          )}
        </div>
      );
    };
    
    export default CafeMarker;