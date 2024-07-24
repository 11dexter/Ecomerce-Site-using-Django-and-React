import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MainSec = () => {
  const [books, setBooks] = useState([]);

  const getAllEntities = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/allproducts/');
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      if (error.response) {
        console.error(`Error Status Code: ${error.response.status}`);
        console.log(error.response.data);
      } else {
        console.error('There was a problem with the axios request:', error.message);
      }
    }
  };

  useEffect(() => {
    getAllEntities();
  }, []);

  return (
    <div className='row'>
      {books.map((book) => (
        <div className="card product-card col-2" key={book.id}>
          <img src={`http://127.0.0.1:8000/${book.product_image}`} className="card-img-top" alt={book.book_name} />
          <div className="card-body">
            <h5 className="card-title">{book.product_name}</h5>
            <div className="product-price">₹{book.price}</div>
            <Link className="btn btn-primary" to={`/book/${book.id}`}>View Book</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSec;