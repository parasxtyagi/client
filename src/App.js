import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from 'react';
import Home from "./Pages/Home";
import Header from "./Components/Header";

// Step: Create context
export const MyContext = createContext();

function App() {
  const [someState, setSomeState] = useState("initial");

  return (
    <MyContext.Provider value={{ someState, setSomeState }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
 