import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

import fs from 'fs'

import { _ProductList , _ProductRemove  } from '../../../Functions/Products'



//CSS
import '../../../Style/Administrator/ManagerProduct/ManagerProduct.css'

const ManagerProducts = () => {

  const [data ,setData]=useState([]);

  const LoadData =()=>{
    _ProductList()
    .then(res=>{
      setData(res.data)
      console.log('List',res.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    LoadData()
  },[])

  const ProductRemove =(id)=>{
    console.log(ProductRemove)
    _ProductRemove(id)
    .then(res=>{
      console.log(res)
      LoadData()
    }).catch(err=>{
      console.log(err)
    })
  }
  
  return (
    <div>
            <div className='Product-Title'>Manager Products</div>
            <div><Link to="/ProductCreate">Products Create</Link></div>  
            <div className="Product-container">
                    <div className="Product-item">No</div>
                    <div className="Product-item">Identification</div>
                    <div className="Product-item">Name</div>
                    <div className="Product-item">Detail</div>
                    <div className="Product-item">Price</div>
                    <div className="Product-item">Group</div>
                    <div className="Product-item">Image</div>
                    <div className="Product-item">Update</div>
                    <div className="Product-item">Delete</div>
                </div>

        {data.map((item,index) => (
            <div key ={index}>
                <div className="Product-container">
                    <div className="Product-item">{index +1}</div>
                    <div className="Product-item">{item._id}</div>
                    <div className="Product-item">{item.name}</div>
                    <div className="Product-item">{item.detail}</div>
                    <div className="Product-item">{item.price}</div>
                    <div className="Product-item">{item.group}</div>
                    <div className="Product-item"> <img style={{width:60, height:60}} src= {`http://127.0.0.1:8081/api/ProductImages/${item.file}`}/></div>
                    <div className="Product-item" ><Link to={'/ProductUpdate/' + item._id}>Update</Link></div>
                    <div className="Product-item" onClick={()=> ProductRemove(item._id)}>Delete</div>
                </div>
            </div >))}

            <h5><Link to="/AdminPage">Back to Manager Page</Link></h5>
</div>
  )
}

export default ManagerProducts
