import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Facilities from "./components/Facilities";
import Accommodation from "./components/Accommodation";
import Restaurant from "./components/Restaurant";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';  // You can add some global styles here

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Facilities />
      <Accommodation />
      <Restaurant />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

