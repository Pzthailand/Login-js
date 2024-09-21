import React,{useEffect,useState} from 'react'
import { useNavigate,Link} from "react-router-dom";
import {  useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

//CSS
import '../../../Style/User/Products/BuyNow.css'
//Function
import { _ProductRead } from '../../../Functions/Products';
import { _Profile } from '../../../Functions/Auth';

const BuyNow = () => {
  const Params = useParams();

  useEffect(() => {
    const LoadData = () => {
      _ProductRead(Params.id)
        .then(res => {
            setGroup(res.data.group)
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
  const [file , setFile]=useState('');
  const [shopname , setShopname]=useState('');
  const [brand, setBrand]=useState(''); 
  const [name , setName]=useState('');
  const [price , setPrice]=useState('');
  const [quantity , setQuantity]=useState('');
  const [detail , setDetail]=useState('');

  const [wallet , setWallet]=useState(50000);
  const [shippingcost , setShippingcost]=useState(45);
  const [orderquantity , setOrderQuantity]=useState(1)

  //Redux
  const selectUser = (state) => state.user;
  const  user  = useSelector(selectUser);

  const id = user.id
  const authtoken = user.token
  const Navigate = useNavigate();

  const ProductOrder=()=>{
     _Profile(id,authtoken) //Function
        .then(res=>{
            console.log(res.data.fname)
            console.log(res.data.lname)
            console.log(res.data.phone)
            console.log(res.data.email)
            console.log(res.data.addres)
            console.log(res.data.zipcode)
        }).catch(err=>{
            console.log(err)
    })
    console.log(Params.id)
    console.log(price+shippingcost)
    //Navigate('/')
  }

  return (
    <div>
        <img className='ImgProductsBuyNow' src= {`http://127.0.0.1:8081/api/ProductImages/${file}`}/>
        <p style={{textWrap:'nowrap'}}><b>Product Name : </b>{name}</p>
        <p><b>Price : </b>฿{(price*orderquantity).toLocaleString()}</p>
        <p><b>Quantity : </b>{orderquantity}</p>    
        <div>

          
        <p style={{color:'red'}}><b>Pay With</b></p>

        
        
        <p><b>Shipping cost : </b>฿{shippingcost}</p>
        <p style={{textWrap:'nowrap'}}><b>Sum of money : </b>฿{(price+shippingcost).toLocaleString()}</p>


          <button style={{width:150,height:40, fontSize:12,backgroundColor:'orangered'}} onClick={ProductOrder}>Order</button> 
          
        </div>
    </div>
  )
}

export default BuyNow
