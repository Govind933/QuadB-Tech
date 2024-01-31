// ShowDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieForm from './MovieForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowDetails(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  return (
    <div className="container mt-5">
      <h1>Show Details</h1>
      <div className="card">
        <img
          src={showDetails.image ? showDetails.image.medium : 'https://via.placeholder.com/210x295'}
          alt={showDetails.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title">{showDetails.name}</h2>
          <p className="card-text">{showDetails.summary}</p>
          <MovieForm showName={showDetails.name} />
          <Link to="/" className="btn btn-secondary">
            Back to Show List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
