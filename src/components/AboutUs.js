import React from "react";
import "./AboutUs.css";

// Import the images
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';


const AboutUs = () => {
    return (
      <section className="about-us">
        <div className="about-content">
          <h1>Welcome to Our Hotel</h1>
          <p>
            Experience luxury, comfort, and world-class service. Whether you're here for a getaway or business, we ensure a memorable stay.
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutUs;