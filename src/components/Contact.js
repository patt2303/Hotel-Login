import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css"; // Don't forget to link the CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-content">
        <div className="contact-details">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div className="contact-info">
              <h3>Phone</h3>
              <p>+916574018323, +919199942479</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-info">
              <h3>Email</h3>
              <p>theloginhotel@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-info">
              <h3>Address</h3>
              <p>2nd Floor, Nirmal Tower, Near Bharat Petroleum, Chandraprabha Society, NH33, Jharkhand</p>
            </div>
          </div>
        </div>
        <div className="map-container">
          {/* Use the correct Google Maps embed URL */}
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263804.3195883244!2d86.10326068962426!3d22.839509818905888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3e309c5b79f:0xe123a74a7946adc!2zMjdBMzg2LTIwMSwgTmlybWFsIFRvd2VyLCBOZWFyIEJoYXJhdCBQZXRyb2xldW0sIENoYW5kcmFwcmFiYSBTb2NpZXR5LCBOSC0zMywgSmhha3JhbmQsIEluZGlhIEhlbHBlY3VsdHVyZQ!5e0!3m2!1sen!2sin!4v1617356074238!5m2!1sen!2sin"
            width="100%"
            height="500"  /* Increased the map height */
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
