import React from 'react'


export default function StackCard({}) {
    return (
      <div className='flex w-full justify-between items-center px-4 py-4 bg-white rounded-lg'
        
      >
          <main className='flex space-x-4'>
             <img className="rounded-full h-8 w-8" />
  
             <h5 className='flex flex-col '>
                <span className='text-sm font-semibold'></span>
                <span className='text-sm '>{"Paid"}</span>
             </h5>
          </main>
          <main className='flex items-center space-x-4 '>
              <h5 className='flex flex-col' >
                  <span className='text-sm font-semibold'></span>
                  <span className='text-sm '>{"Manager"}</span>
              </h5>
            
  
          </main>
  
      </div>
    )
  }