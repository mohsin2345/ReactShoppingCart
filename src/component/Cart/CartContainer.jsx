import React from 'react'
import './CartContainer.css'
import Item from '../Cart/Item'
import Summary from './Summary'
import { useCart } from '../../Contexts/CartContext'


const CartContainer = () => {
  const {cartItem, removeFromCart ,  addtoCart , removeQuantitiy} = useCart();
  
  const handleAdd =(product)=>{
    addtoCart(product);
  }

  const handleRemove =(productId)=>{
    removeFromCart(productId)
  }
  const handleRemoveQuantity =(productId)=>{
    removeQuantitiy(productId)
  }
  return (
    <div className='cart-wrapper'>
      <h2 className="section-title">Shopping Cart</h2>
      <div className="cart-container">
        {
          cartItem && cartItem.length> 0 ? (
          <>
        <div className="cart-items">
       { cartItem.map((item)=>(<Item key={item.id} item={item} handleRemove={handleRemove}  handleAdd={handleAdd} handleRemoveQuantity={handleRemoveQuantity}/>
  )) }
   </div> 
 
   </>
   ) : (
   <div className="no-item">
    <p>No Item in the cart</p>
   </div>
         
       )}
          <Summary cartItem={cartItem}/>
        </div>
      </div>
    
  );

};
export default CartContainer
