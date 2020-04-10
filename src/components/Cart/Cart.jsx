import React from 'react';

//import styling
import './Cart.css';

//import components
import CartItem from '../CartItem/CartItem'

const Cart = ({ itemsInCart, totalCost }) => (

  <div className="Cart">
  
    <h2 className="Cart-title">Your Shopping Cart</h2>

    {itemsInCart.length > 0 ? (
      <div>
        {itemsInCart.map(item => (
          <CartItem key={item.id} title={item.title} cost={item.price * item.quantity} quantity={item.quantity} />
        ))}
        <div className="Cart-total-cost">
          Total Cost: ${totalCost.toFixed(2)}
        </div>
      </div>
    ) : (<div>Your Cart is Empty</div>
    
    )}
  </div>
)

export default Cart