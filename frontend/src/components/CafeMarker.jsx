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
              <div>
                <h2>{selectedCafe.name}</h2>
                <p>{selectedCafe.address}</p>
              </div>
            </InfoWindow>
          )}
        </div>
      );
    };
    
    export default CafeMarker;