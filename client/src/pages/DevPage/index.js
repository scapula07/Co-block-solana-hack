import React from 'react'
import StackCard from './stackCard'



export default function DevPage() {
  return (
    <div className='px-8'>
           <div className='bg-white w-full flex justify-between px-4 py-4 rounded-md'>
            <main className='flex items-center space-x-4'>
                <h5 className='text-slate-700 text-normal font-semibold'>Find contributors</h5>
               <select className='text-slate-400 text-sm font-semibold'>
                 <option >Sort by latest</option>
               </select>
               
            </main>
          
          </div>
         <div className='flex w-full py-4'>
          <div className='w-1/4 flex flex-col'>
                 

                  <main className='flex flex-col space-y-4 py-8  text-black  overflow-y-scroll relative' style={{height:"73vh"}}>
                      <div className='flex bg-white py-4 w-full justify-between rounded-md px-4' >
                        <h5>Ux Designers</h5>
                        <h5>{"5"}</h5>
                      </div>

                      <div className='flex bg-white py-4 w-full justify-between rounded-md px-4' >
                        <h5>Frontend developers</h5>
                        <h5>{"5"}</h5>
                      </div>

                      <div className='flex bg-white py-4 w-full justify-between rounded-md px-4' >
                        <h5>Backend developers</h5>
                        <h5>{"5"}</h5>
                      </div>

                      <div className='flex bg-white py-4 w-full justify-between rounded-md px-4' >
                        <h5>Blockchain developers</h5>
                        <h5>{"5"}</h5>
                      </div>



                    <div className='bg-black rounded-full w-full absolute bottom-10 py-4 '>

                    </div>
                    
                    
                  </main>


             </div>

             <main>

             </main>

         </div>
    </div>
  )
}
