import React, { useEffect, useState } from 'react';
import { _ProductRead, _ProductUpdate } from '../../../Functions/Products';
import { useNavigate, useParams } from 'react-router-dom';


//CSS
import '../../../Style/Administrator/ManagerProduct/ProductUpdate.css'

const ProductUpdate = () => {
  const Params = useParams();

  const Navigate = useNavigate();

  const [fileold, setFileold] = useState('');
  const [form, setForm] = useState({
    name: '',
    detail: '',
    price: '',
    group: '',
    file: null,
  });

  useEffect(() => {
    const LoadData = () => {
      _ProductRead(Params.id)
        .then(res => {
          console.log(res.data);
          setForm({
            name: res.data.name,
            detail: res.data.detail,
            price: res.data.price,
            group: res.data.group,
            file: null, // Reset file state
          });
          setFileold(res.data.file); // old Image URL
        })
        .catch(err => {
          console.log(err);
        });
    };
    LoadData();
  }, [Params.id]);

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: name === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formWithImageData = new FormData();
    for (const key in form) {
      if (form[key]) {
        formWithImageData.append(key, form[key]);
      }
    }

    // Include old file URL if needed by backend
    if (fileold) {
      formWithImageData.append('fileold', fileold);
    }

    try {
      const res = await _ProductUpdate(Params.id, formWithImageData);
      console.log(res);
      // Optionally reload data
       Navigate('/ManagerProducts')
    } catch (err) {
      alert(err.response?.data || 'An error occurred');
    }
  };

  return (
    <div>
      <div>Product Update</div>
    <div>
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
          <label>Old Image:</label>
          {fileold && <img src={`http://127.0.0.1:8081/api/ProductImages/${fileold}`} alt="Old Product" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
        </div>

        <div>
          <label htmlFor="file">New Image:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={onChange}
          />
        </div>

      
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ProductUpdate;