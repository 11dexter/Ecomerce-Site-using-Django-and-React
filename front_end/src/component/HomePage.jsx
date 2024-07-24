import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [products,setProduct] =useState([]);

    const getAllProducts = async () =>{
        try{

            const response = await axios.get('http://127.0.0.1:8000/allproducts');
            console.log(response.data)
            setProduct(response.data);

        }catch(error){
            if(error.respone){
            console.log(`Error Status Code: ${error.response.status}`);
            console.error(error.response.data);
        } else {
            console.error('There was a problem with the axios request:',error.message);
            }
        }
        
    };

    useEffect(() => {
        getAllProducts();
    }, []);



  return (
    <div className='row'>
        {products.map((product,index) => (
        <div class="card" style="width: 18rem;" key={product.id}>
            <img src={`http://127.0.0.1:8000/${product.product_image}`} class="card-img-top" alt={product.product_name}/>
            <div class="card-body">
                <h5 class="card-title">{product.product_name}</h5>
                <p class="card-text">{product.price}</p>
                <Link className="btn btn-primary" to={`/product/${product.id}`}>View Book</Link>
            </div>
        </div>
        ))}
    </div>
  );
};

export default HomePage;