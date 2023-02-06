import React, { useState } from 'react'
import StackCard from './stackCard'
import staff1 from "../../assets/staff1.png"
import staff2 from "../../assets/staff2.png"
import {AiFillLinkedin} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"


const Dev=({dev})=>{

  return(
      <div className='w-full flex flex-col bg-white rounded-lg py-2 px-2 space-y-2'>
         <main className='flex space-x-2 items-center'>
            <img src={dev.img} className="h-10 w-10 rounded-full" />
            <h5 className='text-black text-sm font-semibold'>
                <span>{dev?.name}</span>
            </h5>
         </main>

         <h5 className='w-full flex '>
             <button className='text-xs text-white px-2 rounded-md py-0.5 bg-blue-400  '>Send invite</button>
         </h5>


      </div>
  )
}

export default function DevPage() {
   const [stack,setStack]=useState("Ux Designers")
   
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
         <div className='flex w-full py-4 space-x-6'>
          <div className='w-1/4 flex flex-col'>
                 

                  <main className='flex flex-col space-y-4 py-8  text-black  overflow-y-scroll relative' style={{height:"73vh"}}>
                      <div className='flex bg-white py-4 w-full justify-between rounded-md px-4'
                          onClick={()=>setStack("Ux Designers")}
                      >
                        <h5>Ux Designers</h5>
                        <h5>{"5"}</h5>
                      </div>

                      <div className='flex bg-white py-4 w-full justify-between rounded-md px-4' 
                             onClick={()=>setStack("Frontend developers")}
                      >
                        <h5>Frontend developers</h5>
                        <h5>{"5"}</h5>
                      </div>

                      <div className='flex bg-white py-4 w-full justify-between rounded-md px-4'
                           onClick={()=>setStack("Backend developers")}
                      >
                        <h5>Backend developers</h5>
                        <h5>{"5"}</h5>
                      </div>

                      <div className='flex bg-white py-4 w-full justify-between rounded-md px-4'
                          onClick={()=>setStack("Blockchain developers")}
                      >
                        <h5>Blockchain developers</h5>
                        <h5>{"5"}</h5>
                      </div>



                    <div className='bg-black rounded-full w-full px-2 absolute bottom-10 py-2 '>
                        <main className='w-full h-full flex space-x-2 justify-center'>
                            <input className='h-4 w-9/12 text-xs bg-black text-white'
                             placeholder='Search here ...'
                            />
                            <FiSearch className='text-white'/>

                        </main>

                    </div>
                    
                    
                  </main>


             </div>

             <main className='w-3/4 py-8 px-8'>
                <div className='bg-white py-2 px-4 flex w-full text-slate-700 rounded-lg '>
                  {stack}
                </div>

                <div className='w-full justify-center'>
                  <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-6 pt-8 w-full">
                      {
                        devs.map((dev)=>{
                          return(
                            <Dev  dev={dev}/>
                         )
                        }
                         
                        )
                      }
                  </div>

                </div>

             </main>

         </div>
    </div>
  )
}


const devs=[
  {
    name:"Alex James",
    img:staff1

  },

  {
    name:"Vera Tones",
    img:staff2

  },
  {
    name:"James Kecey",
    img:staff2

  },

  {
    name:"Wox Jim",
    img:staff1

  },
  {
    name:"Jamal Tom",
    img:staff2

  },

]