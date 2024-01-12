import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import Modal from 'react-modal';
Modal.setAppElement('#root');  //this is for accessibility


export const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
