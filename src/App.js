import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import axios from 'axios';

const MyContext = createContext(); 

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(""); // ✅ yeh line add karo

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
  };

  return (
    <Router>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </Router>
  );
}

export default App;
export { MyContext };
