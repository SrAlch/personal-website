import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Splash from "./components/Spalsh";

// Styles
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <Router>
      <Splash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
