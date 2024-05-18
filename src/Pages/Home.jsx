import React from 'react'
import ProductList from '../component/Productlist/ProductList'
import CategoryList from '../component/Categorylist/CategoryList'
import { ProductProvider } from '../Contexts/ProductContext'

const Home = () => {
  return (
    <ProductProvider>
    <div className="main-content">
        <div className="product">
            <h1 className="section-title">Products</h1>
            <ProductList/>
        </div>
      <div className="category">
        <h1 className="section-title">Categories</h1>
        <CategoryList/>
      </div>
    </div>
    </ProductProvider>
  )
}

export default Home
