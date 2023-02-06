import React,{useState} from 'react'
import MeCam from './videoMe'
import {MdZoomOutMap,MdOutlineMic,MdVideocam,MdCall,MdSettings,MdAdd} from "react-icons/md"
import solanaImg from "../../assets/solanaImg.png"
import raydiumImg from "../../assets/raydiumImg.png"

const Reminder=({img,text})=>{

    return(
        <div className='flex px-4 py-2 rounded-lg bg-white space-x-2'>
            <img src={img}  className="h-6 w-6 rounded-lg"/>
            <h5 className='text-sm text-slate-600'>{text}</h5>

        </div>
    )
}

export default function VideoCall() {
     const [reminders,setReminders] =useState([
                {
                    img:solanaImg,
                    text:"Meeting with Solana team"
                },
                {
                    img:raydiumImg,
                    text:"Meeting with Raydium team"
                }

         
              ]  )
  return (
    <div className='py-8 px-8'>
         <div className='flex w-full h-full'>
             <div className='w-3/5 h-full'>
                 <div className='w-full h-full flex flex-col'>
                      <main className='h-3/5 px-4'>
                        <div className='bg-black w-full rounded-xl'>
                           < MeCam />

                          <main className='flex justify-center items-center w-full space-x-4 py-8'>
                             <h5 className='bg-white p-2 rounded-xl '>
                                 <MdZoomOutMap className='text-slate-700 text-lg'/>
                            </h5> 
                             <h5 className='bg-white p-2 rounded-xl '>
                                 <MdOutlineMic  className='text-slate-700 text-lg' />
                                 </h5> 
                             <h5 className='bg-red-700 p-2 rounded-xl '> 
                              <MdCall  className='text-white text-2xl'/>
                             </h5>  
                             <h5 className='bg-white p-2 rounded-xl '>
                                <MdVideocam  className='text-slate-700 text-lg' />
                                </h5>  
                             <h5 className='bg-white p-2 rounded-xl '>
                                <MdSettings  className='text-slate-700 text-lg' />
                            </h5>
                          </main>
                        </div>
                      

                      </main>

                      <main className='h-2/5 px-4 py-8'>
                        <div className='flex w-full justify-between'>
                            <h5 className='text-slate-700 font-semibold text-lg'>Tasks</h5>
                            <h5 className='bg-blue-400 p-2 rounded-lg '>
                                <MdAdd  className="text-lg text-white "/>
                            </h5>

                        </div>

                        <div className='flex items-center'>

                        </div>
                          
                     </main>


                 </div>


             </div>
                <div className='w-2/5 px-8' >
                    <div className='flex flex-col space-y-2'>
                        <h5 className='flex text-slate-600'>Reminders</h5>
                       {reminders.map((reminder)=>{
                          
                          return(
                            <Reminder img={reminder.img} text={reminder.text}/>
                          )
                       })

                       }
                     

                    </div>

                    <div className='py-4'>
                        <h5 className='flex text-slate-600'>Chats</h5>
                        <main className='h-96 rounded-lg bg-white mt-4'>

                        </main>

                    </div>

                
                </div>
              

         </div>

    </div>
  )
}
