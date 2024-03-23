import React, { useState } from 'react'
import {IoMdClose} from "react-icons/io";
import {FaShoppingCart} from "react-icons/fa";
import ItemCard from './ItemCard';
import {  useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
const Cart = () => {
  
  const [activeCart, setActiveCart] = useState(false)
  const cartItems = useSelector((state)=>state.cart.cart);
  const totalqnty =  cartItems.reduce((totalqnty,item)=> totalqnty + item.qty, 0);
  const totalprice = cartItems.reduce((total,item)=> total + item.qty * item.price,0);
  const navigate = useNavigate();
  return (
   <>
   <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${activeCart ? "translate-x-0": "translate-x-full"} transition-all duration-500 z-50`}>
     <div className='flex justify-between items-center my-3'>
        <span className='text-xl font-bold text-gray-800'>My order</span>
        <IoMdClose onClick={()=> setActiveCart(!activeCart)} className='border-2 border-gray-600 hover:border-red-300'/>

    </div>
    { cartItems.length > 0 ?
      cartItems.map((food)=>{
        return ( <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
      );
      }): <h2 className='text-center text-xl font-bold text-gray-800' >your card is empty</h2>
    }
    <div className='absolute bottom-0'>
        <h3 className='font-semibold text-gray-800'>Items:{totalqnty}</h3>
        <h3 className='font-semibold text-gray-800' >Total Amount:{totalprice}</h3>
        <hr  className='w-[90vw] lg:w-[18vw] my-2'/>
        <button onClick={()=>navigate("/About")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
    </div>
  </div>
    <FaShoppingCart onClick={()=> setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4' ${totalqnty>0 && "animate-bounce delay-500 transition-all"}`}  />
   </>

  )
}

export default Cart