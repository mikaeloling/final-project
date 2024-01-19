import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import Modal from 'react-modal';
import  { LoadScript } from '@react-google-maps/api';
import AdBannerSection from "./components/AdBannerSection";
Modal.setAppElement('#root');  //this is for accessibility

export const App = () => {
  return (
    <>
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}> 
      <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
      <AdBannerSection />
      </LoadScript>
    </>
  );
};
