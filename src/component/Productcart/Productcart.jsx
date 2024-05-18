import React from 'react'
import { TbPlus } from 'react-icons/tb'
import './ProductCard.css'
import { useCart } from '../../Contexts/CartContext'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const Productcart = ({product}) => {
  const {addtoCart} = useCart();
  const handleAdd=(product)=>{
    addtoCart(product)
  }
  return (
    <motion.div className='card-container' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 2}}>
      <div className="cart-image">
        <img src={product.image} alt="product image" />
      </div>
      <div className="cart-detail">
        <Link to={`/product/${product.id}`}>
        <h4 className="cart-title">{product.title}</h4>
        <div className="cart-category">{product.category}</div>
        </Link>
        <div className="cart-flex">
          <div className="cart-price">${product.price}</div>
          <div className="cart-button" onClick={()=>handleAdd(product)}>
            <TbPlus/>
          </div>
        </div>
      </div>
      
    </motion.div>
  )
}

export default Productcart
