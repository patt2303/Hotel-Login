import React from "react";
import { FaBed, FaBath, FaWifi, FaTv } from "react-icons/fa";
import "./Accommodation.css"; // Don't forget to link the CSS file

const Accommodation = () => {
  return (
    <section id="accommodation" className="accommodation">
      <h2 className="accommodation-title">Our Premium Accommodation</h2>
      <div className="accommodation-list">
        <div className="room">
          <FaBed className="room-icon" />
          <h3>Single Room</h3>
          <p>Perfect for solo travelers. Comfort and privacy guaranteed.</p>
          {/* <button className="book-btn">Book Now</button> */}
        </div>
        <div className="room">
          <FaBed className="room-icon" />
          <h3>Double Room</h3>
          <p>Spacious and cozy. Ideal for couples or friends traveling together.</p>
          {/* <button className="book-btn">Book Now</button> */}
        </div>
        <div className="room">
          <FaBed className="room-icon" />
          <h3>Suite</h3>
          <p>Luxurious suite with stunning views and top-class amenities.</p>
          {/* <button className="book-btn">Book Now</button> */}
        </div>
        <div className="room">
          <FaBed className="room-icon" />
          <h3>Family Room</h3>
          <p>Spacious rooms designed for families, with all the comforts of home.</p>
          {/* <button className="book-btn">Book Now</button> */}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
