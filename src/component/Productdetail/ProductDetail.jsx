import React from 'react'
import './ProductDetail.css'

import UseGetProduct from '../../Hooks/UseGetProduct'
import { useCart } from '../../Contexts/CartContext'
import {motion} from "framer-motion"

const ProductDetail = () => {
  const {product, loading} = UseGetProduct();
  const {addtoCart} = useCart();

  const handleAdd =(product)=>{
    addtoCart(product)
  }
  
  return (
    <motion.div className="product-container" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3, duration: 2}}>
      <div className="product-image">
        {
          loading ? (
          <div className='product-image-skeleton'></div>
        ): (
          <img src={product.image} alt={product.title} />
        )}
        
      </div>
      <div className="product-detail">
        {
          loading ?(
            <div className='etail-skeleton'>
              <div className="roduct-skeleton"></div>
              <div className="roduct-skeleton"></div>
              <div className="roduct-skeleton"></div>
              <div className="roduct-skeleton"></div>
              <div className="roduct-skeleton"></div>
              <div className="roduct-skeleton"></div>
              <div className="roduct-skeleton"></div>
            </div>) : ( <>
           
        <div className="product-category">{product.category}</div>
        <h1 className="product-title">{product.title}</h1>
        <div className="product-rateing">
          <div className="product-rating-star">*</div>
          <span>{product.rating?.rate}</span>
          <span>{product.rating?.count} review</span>
        </div>
        <p className="product-dsecripation">{product.description}</p>
        <div className="product-price">${product.price}</div>
        <div className="product-buttons">
          <div className="product-btn" onClick={()=>handleAdd(product)}>Add to Cart</div>
          <div className="product-btn buy-btn">Buy Now</div>
        </div>
        </>
        )}
      </div>
     
    </motion.div>
  )
}

export default ProductDetail
