import React from 'react'
import { setSearch } from '../Redux/slices/SearchSlice'
import { useDispatch } from 'react-redux'
const Navbar = () => {
  const dispatch = useDispatch();
  return (
   <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10' >
    <div>
        <h3 className='text-xl font-bold text-gray-600' >{new Date().toUTCString().slice(0, 16)}</h3>
        <h3 className='text-2xl font-bold'> Foods</h3>
    </div>
    <div>
        <input onChange={(e)=> dispatch(setSearch(e.target.value))} className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' type="search" name="search" id="" placeholder='search here' autoComplete='off' />
    </div>
   </nav>
  )
}

export default Navbar