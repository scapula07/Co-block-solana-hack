import React from 'react'
import {AiOutlineSearch } from "react-icons/ai"


export default function SearchBar() {
  return (
    <div className='flex  border-slate-600 border rounded-lg items-center space-x-2 px-4 py-0.5'>
        <AiOutlineSearch  className='text-lg'/>
        <input
         placeholder='Search ...'
         className='w-3/4'
        />

    </div>
  )
}
