
// MovieForm.js
import React, { useState } from 'react';

const MovieForm = ({ showName }) => {
  const [formData, setFormData] = useState({
    name: showName,
    // Add other relevant details
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Book Movie Ticket</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      {/* Add other form fields */}
      <button type="submit" className="btn btn-primary">
        Book Ticket
      </button>
    </form>
  );
};

export default MovieForm;
