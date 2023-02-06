import React,{useEffect} from 'react'
import { useActions } from '../../Hooks/coblocks.utils'
import {BiTask} from "react-icons/bi"
import {BsDot} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"
import {AiOutlineClose} from "react-icons/ai"


const Task=({idx})=>{
   return(
      <div className='bg-white w-full px-4 py-4 rounded-md border-l-4 border-slate-400'>
          <div className='flex items-center space-x-14'> 
             <main className='flex flex-col'>
                <h5 className='text-lg'>{idx}</h5>
                <h5 className='text-xs'>Solana</h5>

             </main>
             <main className='flex w-full justify-between'>
                <main className='flex space-x-6 w-3/4'>
                    <div className='flex items-center space-x-2'>
                        <BiTask className='text-3xl text-slate-600' />
                        <h5 className='text-sm'>{"Smart contract development"}</h5>

                    </div>

                    <div className='flex items-center space-x-2'>
                        <RxDotFilled className='text-rose-600 text-lg'/>
                        <h5 className='text-xs'>{"Undone"}</h5>
                    </div>
                </main>
                 
                 <div  className='flex w-1/4  justify-end text-black space-x-4 items-center  '>
                      <input  type="checkbox" />
                       <AiOutlineClose />
                 </div>

             </main>

          </div>

      </div>
   )
}
export default function Tasks() {
  const {initializeUser ,getAllTask,addTask,markDone,removeTask,findDevAccounts,myTasks} = useActions()
  console.log(myTasks,"my")

  useEffect(()=>{
    findDevAccounts()
  },[])
  return (
    <div className='py-8'>
        <h5 className='text-lg font-semibold text-slate-600 flex'>Tasks</h5>
       <div className='flex flex-col py-4 w-full'>
         {
          [1].map(()=>{
            return(
               <Task idx={"1"}/>
            )
          })
         }
        

       </div>
        
    </div>
  )
}
