import React from 'react'
import { FaStar } from "react-icons/fa6";
//usedispatch = redux m jo fnc bnaye h usko use kr skte  h
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux/slices/CartSlice';
const FoodCard = ({id,name,desc,img,rating,price,handletoast}) => {
  const dispatch = useDispatch();
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg'>
        <img className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' src={img} alt="" />
        <div className='text-sm flex justify-between '>
            <h2>{name}</h2>
            <span className='text-green-500' >₹{price}</span> 
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}...  </p>
        <div className='flex justify-between'>
            <span className='flex  justify-center items-center'>
                <FaStar className='mr-1 text-yellow-400'/> {rating}
            </span>
            <button onClick={()=>{dispatch(addtoCart({id,name,price,img,rating,qty:1}))
          handletoast(name);
          }} className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard