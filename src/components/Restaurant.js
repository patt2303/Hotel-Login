import React, { useState } from "react";
import "./Restaurant.css";
import image5 from '../assets/5.jpeg';

const Restaurant = () => {
  // State to track modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const [error, setError] = useState(null); // Track submission errors

  // Function to handle opening and closing the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError(null); // Reset error when closing the modal
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      date: formData.get('date'),
      time: formData.get('time'),
      guests: formData.get('guests')
    };

    try {
      setIsSubmitting(true); // Set loading state
      const response = await fetch("http://localhost:3000/api/book-table", {  // Ensure the port is correct
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check for different status codes to handle errors
      if (response.ok) {
        alert("Reservation successful!");
        setIsModalOpen(false); // Close modal after successful submission
      } else {
        // Fetch the error message from the server response
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to reserve a table. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message); // Set error message to show on UI
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <section id="restaurant" className="restaurant">
      <div className="restaurant-text">
        <h2>Our Restaurant</h2>
        <p>
          Experience gourmet dining like never before at our in-house restaurant. Enjoy a
          wide variety of local cuisines and exquisite dishes prepared by our
          talented chefs. Whether you're here for breakfast, lunch, or dinner, we promise
          an unforgettable dining experience.
        </p>
        {/* Button to open the reservation modal */}
        <button className="book-table-btn" onClick={handleOpenModal}>
          Reserve a Table
        </button>
      </div>

      <div className="restaurant-images">
        <div className="image-1"></div>
        <div className="image-2"></div>
        <div className="image-3"></div>
        <div className="image-4"></div>
      </div>

      {/* Table Reservation Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-btn" onClick={handleCloseModal}>
              X
            </button>
            <h3>Reserve Your Table</h3>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <form className="reservation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" required />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests:</label>
                <input type="number" id="guests" name="guests" min="1" required />
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Booking..." : "Book Table"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Restaurant;