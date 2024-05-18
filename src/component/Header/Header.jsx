import React from 'react'
import { TbShoppingBagSearch, TbShoppingCart } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";

import "./Header.css";
import { Link } from 'react-router-dom';
import { useCart } from '../../Contexts/CartContext';
const Header = () => {
  const {cartItem} =useCart();
  return (
    <div className="header">
        <Link to="/" >
        <div className="logo">
          <h2>SCART</h2>
            <TbShoppingBagSearch className='icon'/>
            
        </div>
        </Link>
        <div className="right-side">
            <div className="search-input">
                <input type="text" placeholder="Search"/>
                <TbSearch />
            </div>
        <Link to="/cart">
        <div className="cart">
            <TbShoppingCart className="cart-icon"/>
            <span>{cartItem.length}</span>
        </div>
        </Link>
        </div>
    </div>
  )
}

export default Header
