import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CBD from "./pages/cbd/CBD";
import Home from "./pages/home/Home";
import HeaderBar from "./pages/header/Header";

import ConsumePage from "./pages/consume/Consume";
import WholesalePage from "./pages/wholesale/Wholesale";
import {Contactless} from "@mui/icons-material";
import ContactPage from "./pages/contact/Contact";
import InfoPage from "./pages/info/Info";
import MerchantPage from "./pages/merchant/Merchant";
import  "./App.css";
// import HeaderBar from "./pages/headerBar/HeaderBar";

function App() {
  return (
    <div>

            <HeaderBar />
            <Home />
            <CBD />
            <ConsumePage />
            <MerchantPage />
            <WholesalePage />
            <ContactPage />
            <InfoPage />


    </div>

  )
}

export default App;
