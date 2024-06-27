// src/components/Card.js
import React from 'react';

const Card = ({ imgSrc, title, text, price }) => {
  return (
    <div className="col">
      <br />
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top" alt={title} height="250px" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text} ${price}</p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
