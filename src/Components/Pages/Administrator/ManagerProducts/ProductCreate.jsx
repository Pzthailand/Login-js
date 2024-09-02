import React, { useState } from 'react';

import { _ProductCreate } from '../../../Functions/Products'

export const ProductCreate = () => {

  const [form, setForm] = useState({
    name: '',
    detail: '',
    price: '',
    group:'',
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

        <div>
          <label htmlFor="group">Group:</label>
          <input
            type="text"
            id="group"
            name="group"
            placeholder="Group"
            value={form.group}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="file">Image:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={onChange}
          />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate