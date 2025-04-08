import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import axios from 'axios';
import ProductModal from "./Components/ProductModal";

const MyContext = createContext(); 

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(""); 
  const  [isOpenProductModal,setisOpenProductModal] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Failed to fetch country list:", error);
    }
  };

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry, 
    isOpenProductModal,
    setisOpenProductModal
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>
        <Footer />
        {
            isOpenProductModal===true && <ProductModal />
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
