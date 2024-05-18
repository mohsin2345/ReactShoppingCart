import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UseGetProduct = () => {
    const [product,setproduct] =useState([]);
    const [loading , setLoading] = useState(false);
    const {id} = useParams();
    
    const getProduct = async ()=>{
        try{

            setLoading(true);

            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (res.ok)
            {
                const data = await res.json();
                setproduct(data);
                setLoading(false);
            }

        }catch (error){

            console.log(error);

        }
    };
    useEffect(()=>{
        getProduct(id);
    },[]);
  return{product,loading}
   
  
}

export default UseGetProduct
