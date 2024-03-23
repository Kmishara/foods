import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/slices/CategorySlice';
const CategoryMenu = () => {
  const [categories, setcategories] = useState([]);
  const listUniqueCategories=()=>{
    const uniqueCategories = [...new Set(FoodData.map((food)=> food.category)),];
    setcategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(()=>{
    listUniqueCategories();
  },[]);
  const dispath = useDispatch();
  const selectCategory = useSelector((state)=> state.category.category); 
  return (
    <div className='ml-6'>
        <h3 className='text-xl font-semibold'>Find the best food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button onClick={()=> dispath(setCategory("All"))}  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectCategory === "All" && "bg-green-500 text-white"}` }>All</button>
          {categories.map((category,index)=>{
            return(
 <button onClick={()=> dispath(setCategory(category))} key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectCategory === category && "bg-green-500 text-white"}` }>{category}</button>
            )
          })}
            
        </div>
    </div>
  )
}

export default CategoryMenu
// most repeated value m common ko choose krta h = set