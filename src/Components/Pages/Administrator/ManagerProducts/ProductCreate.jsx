import React, { useState } from 'react';

//CSS
import '../../../Style/Administrator/ManagerProduct/ProductCreate.css'


//Functions
import { _ProductCreate } from '../../../Functions/Products'

export const ProductCreate = () => {

  const [form, setForm] = useState({
    shopname:'',
    brand:'',
    name: '',
    detail: '',
    price: '',
    group:'',
    type:'',
    quantity:'',
    file: null,
  });

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formWithImageData = new FormData();
    for (const key in form) {
      if (form[key]) { // Avoid appending empty values
        formWithImageData.append(key, form[key]);
      }
    }
    _ProductCreate(formWithImageData)
    .then(res =>{
      alert(res.data)
    }).catch(err =>{
      alert(err.response.data)
    })
  };

  return (
    <div>
      <h2>Products Create</h2>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div>
          <div>
            <label htmlFor="shopname">Shop Name:</label>
            <input
              type="text"
              id="shopname"
              name="shopname"
              placeholder="Shop Name"
              value={form.shopname}
              onChange={onChange}
            />
          </div>
        </div>
  
        <div>
          <div>
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Product Brand"
              value={form.brand.toLowerCase()}
              onChange={onChange}
            />
          </div>
        </div>
  
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={onChange}
            />
          </div>
        </div>
  
        <div >
          <div>
            <label htmlFor="detail">Detail:</label>
            <input
              type="text"
              id="detail"
              name="detail"
              placeholder="Product Detail"
              value={form.detail}
              onChange={onChange}
            />
          </div>
        </div>
  
        <div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={onChange}
            />
          </div>
        </div>
  
        <div>
          <div>
            <label htmlFor="group">Group:</label>
            <input
              type="text"
              id="group"
              name="group"
              placeholder="Product Group"
              value={form.group.toLowerCase()}
              onChange={onChange}
            />
          </div>
        </div>
  
        <div>
          <div>
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Product Type"
              value={form.type.toLowerCase()}
              onChange={onChange}
            />
          </div>
        </div>
  
        <div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              placeholder="Product Quantity"
              onChange={onChange}
            />
          </div>
        </div>
  
        <div>
          <div>
            <label htmlFor="file">Image:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={onChange}
            />
          </div>
        </div>
  
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate