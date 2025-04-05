import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const MyContext = createContext(); // ✅ Export this named

const App = () => {
  const [state, setState] = useState({
    cart: [],
    user: null,
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
};

export default App;
