import React from "react";
import PropTypes from "prop-types";

const Product = ({ id, image, title, price, description }) => {
  return (
    <div key={id} className="col-4">
      <div className="card">
        <img src={image} alt="..." className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;
