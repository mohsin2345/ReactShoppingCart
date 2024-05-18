import React from 'react'
import './CategoryList.css'
import Categorycard from '../Categorycard/Categorycard'
import UseGetCategory from '../../Hooks/UseGetCategory'
const CategoryList = () => {
  const {Categories, loading} =UseGetCategory();
  console.log(Categories);
  return (
    <div className="category-list">
      {
        loading ? ( 
        Array.from({length:4}).map((_,index)=>(
          <div key={index} className='category-cart'>
            <h4 className='category-name'>Loading...</h4>

          </div>
        )) 
        )
        : ( 
          Categories.map((category)=>(
          <Categorycard key={category} category={category}/>
        ))
        )}
    </div>
  )
}

export default CategoryList
