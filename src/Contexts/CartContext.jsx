import React, {children, createContext, useContext, useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import item from '../component/Cart/Item';

const CartContext = createContext();

 export const CartProvider = ({children}) => {
  const [cartItem, setCartItems] = useState(JSON.parse(localStorage.getItem("CartItems"))||[]);
  
  const addtoCart = (product)=>{
    const existingItemIndex = cartItem.findIndex(
      (item)=> item.id === product.id

    );
    product.quantity = product.quantity || 1
    if(existingItemIndex !== -1){
      const updatedItems = [...cartItem];
      updatedItems[existingItemIndex].quantity +=1;
      setCartItems(updatedItems);
    }else{
      setCartItems([...cartItem, product]);
    }
  };
  
  
  const removeFromCart =(productId)=>{
    setCartItems(cartItem.filter((item)=> item.id !==productId));
  };

// remove cart

const removeQuantitiy = (productId)=>{
  const existingItemIndex = cartItem.findIndex(
    (item) => item.id === productId

  );
 
  if(existingItemIndex !== -1){
    const updatedItems = [...cartItem];
    updatedItems[existingItemIndex].quantity -= 1 ;
    if(updatedItems[existingItemIndex].quantity ===0){
    removeFromCart(productId);
  }

  else{
    setCartItems(updatedItems);
  }
}
};


  useEffect(()=>(
    localStorage.setItem("cartItems",JSON.stringify(cartItem))
  ),[cartItem])
  return <CartContext.Provider value={{cartItem, addtoCart,removeFromCart,removeQuantitiy}}>{children}</CartContext.Provider>
  
}
export const useCart =()=> useContext(CartContext)


