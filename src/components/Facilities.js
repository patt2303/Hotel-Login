import React from "react";
import { FaSwimmingPool, FaConciergeBell, FaWifi, FaSpa, FaDumbbell, FaUtensils } from "react-icons/fa";
import "./Facilities.css"; // Don't forget to link the CSS file

const Facilities = () => {
  return (
    <section id="facilities" className="facilities">
      <h2 className="facilities-title">Our Premium Facilities</h2>
      <div className="facilities-list">
        <div className="facility">
          <FaSwimmingPool className="facility-icon" />
          <h3>Rooftop Lounge</h3>
          <p>Relax and unwind by our lounge, perfect for a refreshing time with friends and family</p>
        </div>
        <div className="facility">
          <FaConciergeBell className="facility-icon" />
          <h3>24/7 Room Service</h3>
          <p>Enjoy round-the-clock service from our dedicated team.</p>
        </div>
        <div className="facility">
          <FaWifi className="facility-icon" />
          <h3>Free Wi-Fi</h3>
          <p>Stay connected with our fast and reliable Wi-Fi service.</p>
        </div>
        <div className="facility">
          <FaSpa className="facility-icon" />
          <h3>Spa and Wellness</h3>
          <p>Indulge in our rejuvenating spa treatments for ultimate relaxation.</p>
        </div>
        <div className="facility">
          <FaDumbbell className="facility-icon" />
          <h3>Fitness Center</h3>
          <p>Our fully equipped gym is ready to keep you in shape.</p>
        </div>
        <div className="facility">
          <FaUtensils className="facility-icon" />
          <h3>Restaurant & Cafe</h3>
          <p>Enjoy gourmet dining at our restaurant with a selection of fine drinks and snacks</p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
