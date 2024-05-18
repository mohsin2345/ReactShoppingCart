import React from 'react'
import item from './Item'

const Summary = ({cartItem}) => {

    const totalAmount= cartItem.reduce((acc, item)=>{

        return acc + item.price * item.quantity;

}, 0)

const textAmount = totalAmount *0.02;

const totalQuantity = cartItem.reduce((acc,  item)=>{

    return acc + item.quantity;
    
},0)

const totalAmountWithTax = totalAmount + textAmount;
  return (
    <div className='cart-summary'>
        <h3 className="summary-title">Summary</h3>
        <div className="summary-total">
            <span>Suntotal*</span>${totalAmount.toFixed(2)}
        </div>
        <div className="summary-total-tax">
            <span>Text charges(2%)</span>${textAmount.toFixed(2)}
        </div>
        <div className="summary-total-quantity">
            <span>Total Quantity*</span>{totalQuantity}
        </div>
        <div className="summary-total-amount">
            <span>total price</span>${totalAmount.toFixed(2)}
        </div>
        <button className="check-out-btn">process to checkout</button>
      
    </div>
  )
}

export default Summary
