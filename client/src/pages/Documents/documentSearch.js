import React from 'react'
import {FiSearch} from "react-icons/fi"

export default function DocumentSearch() {
  return (
    <div className='flex bg-white rounded-sm py-2 w-full  px-2 items-center space-x-2'>
        
        <input 
          placeholder='Search documents..'
          className='w-3/4 outline-none text-sm'
        />
        <FiSearch className='text-black' />
    </div>
  )
}
