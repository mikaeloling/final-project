import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  return (
        <LoadScript
        async = {true}
        
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onError={(error) => {
        error.message = "Error loading Google Maps API";
        console.error(error);
        }}
        onLoad={() => {
        console.log("Google Maps API loaded successfully");
      }}
      >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>
        <Marker position={defaultCenter}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;