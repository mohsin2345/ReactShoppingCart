import React, { useEffect, useState } from 'react'
import Productcart from '../Productcart/Productcart'

import './ProductList.css'
import { useProduct } from '../../Contexts/ProductContext'
import Skeleton from '../Skeleton/Skeleton'
const ProductList = () => {
const {products ,loading} = useProduct();
//const loading = true


  return (
    
    <div className="product-list">
   {
    loading ? (
      Array.from({length:4}).map((_, index)=>(
        <div key={index} className="skeleton-container">
          <Skeleton/>
        </div>
      ))
    ):
   (
    <>
  { products.map((product)=>(
      <Productcart key={product.id} product={product}/>
     ))}
</>
   )}
    </div>
  )
};

export default ProductList
