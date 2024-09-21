import React,{useEffect,useState} from 'react'
import { useNavigate,Link} from "react-router-dom";
import {  useParams } from 'react-router-dom';

//Function
import { _ProductRead } from '../../../Functions/Products';

//CSS
import '../../../Style/User/Products/ProductsDetails.css'

const ProductsDetail = () => {

  const Params = useParams();

  useEffect(() => {
    const LoadData = () => {
      _ProductRead(Params.id)
        .then(res => {
            setGroup(res.data.group)
            setType(res.data.type)
            setFile(res.data.file)
            setShopname(res.data.shopname)
            setBrand(res.data.brand)
            setName(res.data.name)
            setPrice(res.data.price)
            setQuantity(res.data.quantity)
            setDetail(res.data.detail)
        })
        .catch(err => {
          console.log(err);
        });
    };
    LoadData();
  }, [Params.id]);

  const [group , setGroup]=useState('');
  const [type , setType]=useState('');
  const [file , setFile]=useState('');
  const [shopname , setShopname]=useState('');
  const [brand, setBrand]=useState(''); 
  const [name , setName]=useState('');
  const [price , setPrice]=useState('');
  const [quantity , setQuantity]=useState('');
  const [detail , setDetail]=useState('');



  const addtocart=()=>{
    //console.log(Params.id)
    let Product = Params.id
    let orderqty = 1

    const add = {
      Product,
      orderqty
    }
    console.log(add)
  }


  return (
    <div>
        <p><b>Group : </b> {group}{' > '}{type}</p>
        <img className='ImgProductsDetails' src= {`http://127.0.0.1:8081/api/ProductImages/${file}`}/>
        <p style={{textWrap:'nowrap'}}><b>Product Name : </b>{name}</p>
        <p><b>Price : </b>฿{price.toLocaleString()}</p>
        <p><b>Remains : </b>{quantity}</p>
        <div>

        <Link to={'/BuyNow/'+Params.id}> 
          <button style={{width:150,height:40, fontSize:12,backgroundColor:'orangered'}}>Buy</button> 
        </Link>

        
          <button 
            onClick={addtocart} 
            style={{marginLeft:10,width:300,height:40, fontSize:12,backgroundColor:'gray'}}
            >Add to cart
          </button>
      

          <p><b>Shop Name : </b>{shopname}</p>
          <p><b>Brand : </b>{brand}</p>
          <p style={{width:500}}><b>Description : </b>{detail}</p>
        </div>
    </div>
  )
}

export default ProductsDetail
