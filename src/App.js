import React from 'react';
import './App.css';
import Home from "./pages/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
      <div className="main">

          <Navbar/>
          <Home/>
          <Footer/>
      </div>

);
}

export default App;
