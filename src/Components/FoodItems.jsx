import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  const category = useSelector((state)=> state.category.category);
  const search = useSelector((state)=> state.search.search);

  const handletoast = (name) => toast.success(`Added ${name}`);
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-wrap gap-3 justify-center lg:justify-start mx-6 my-10'>
{FoodData.filter((food)=>{
  if(category==="All"){
    return food.name.toLowerCase().includes(search.toLowerCase());
  } else{
    return category === food.category &&  food.name.toLowerCase().includes(search.toLowerCase()) ;

  }
}).map((food)=>(
  <FoodCard key={FoodCard.id} id={food.id} name={food.name} price={food.price}desc={food.desc}rating={food.rating} img={food.img} handletoast={handletoast} />
))}
       
    </div>
</>

  )
}

export default FoodItems