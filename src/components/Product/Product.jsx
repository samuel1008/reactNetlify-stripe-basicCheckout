import React from 'react';

//import style
import './Product.css';

const Product = ({ onAddToCartClick, price, title  }) => (
  <div className="Product">
    <h2 className="Product-tite">{title}</h2>
    <div className="Product-price">${price}</div>
    <button className="Product-buy-button" onClick={onAddToCartClick}>Add to cart</button>
  </div>
)

export default Product