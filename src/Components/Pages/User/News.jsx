import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../../Style/User/News.css';
import '../../Style/User/Products/Products.css';

// Function
import { _ProductsType } from '../../Functions/Products';

function News() {
  const [data, setData] = useState([]);
  const [search , setSearch] = useState('');

  console.log(search)

  const Search = () => {

    const type = search;
    
    const value = { type };
   
    _ProductsType(value)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    Search(); // Call the search function when the component mounts
  }, []);


  

  return (
    <div>

      {/*<div>

      <input name='search' onChange={e=> setSearch(e.target.value.toLowerCase())} />
      <button style={{float:'left'}} onClick={Search}>Search</button>

      </div>
     
      <hr />
      {data.length === 0 ? (
        <p>No products available.</p>
      ) : (
        data.map((item, index) => (
          <div key={index}>
            <Link to={`/ProductsDetail/${item._id}`}>
              <div className="ProductsList">
                <div className="card">
                  <img
                    src={`http://127.0.0.1:8081/api/ProductImages/${item.file}`}
                    alt={item.name}
                  />
                  <p className="productname">{item.name}</p>
                  <p className="price">฿{item.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}*/}
    </div>
  );
}

export default News;