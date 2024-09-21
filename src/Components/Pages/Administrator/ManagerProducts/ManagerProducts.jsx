import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

//Function
import { _ProductList , _ProductRemove  } from '../../../Functions/Products'

//CSS
import '../../../Style/Administrator/ManagerProduct/ManagerProduct.css'
//Icon
import Edit from '../../../../assets/Administrator/ManagerProducts/edit.ico'
import Remove from '../../../../assets/Administrator/ManagerProducts/delete.ico'

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
            <h2>Manager Products</h2>
          
            <div><Link to="/ProductCreate" style={{fontSize:20,color:'black',}}>Add Products</Link></div> 

            <div className="Product-container">
                    <div className="Product-item">No</div>
                    <div className="Product-item">Identification</div>
                    <div className="Product-item">Shop Name</div>
                    <div className="Product-item">Brand</div>
                    <div className="Product-item">Name</div>
                    <div className="Product-item">Price</div>
                    <div className="Product-item">Group</div>
                    <div className="Product-item">Type</div>
                    <div className="Product-item">Quantity</div>
                    <div className="Product-item">Image</div>
                    <div className="Product-item">Edit</div>
                    <div className="Product-item">Delete</div>
                </div>

        {data.map((item,index) => (
            <div key ={index}>
                <div className="Product-container">
                    <div className="Product-item">{index +1}</div>
                    <div className="Product-item">{item._id}</div>
                    <div className="Product-item">{item.shopname}</div>
                    <div className="Product-item">{item.brand}</div>
                    <div className="Product-item">{item.name}</div>
                    <div className="Product-item">{item.price}</div>
                    <div className="Product-item">{item.group}</div>
                    <div className="Product-item">{item.type}</div>
                    <div className="Product-item">{item.quantity}</div>
                    <div className="Product-item">
                      <img style={{marginLeft:0,width:80, height:80}} src= {`http://127.0.0.1:8081/api/ProductImages/${item.file}`}/>
                    </div>
                    <div className="Product-item" >
                        <Link to={'/ProductUpdate/' + item._id}>
                            <img  style={{width:25,height:25}}src={Edit}/>
                        </Link>
                    </div>
                    <div className="Product-item" onClick={()=> ProductRemove(item._id)}>
                      <img  style={{width:25,height:25  }}src={Remove}/>
                    </div>

                </div>
            </div >))}

            <h5><Link to="/Adminitratordashboard">Back to Manager Page</Link></h5>
</div>
  )
}

export default ManagerProducts
