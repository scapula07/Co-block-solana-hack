import React, { useEffect } from 'react'
import staff1 from "../../assets/staff1.png"
import {AiOutlineMail} from "react-icons/ai"
import {TiAttachmentOutline} from "react-icons/ti"
import { Outlet } from 'react-router-dom'
import {BsGrid} from "react-icons/bs"
import {GrHomeOption} from "react-icons/gr"
import meeetingImg from "../../assets/meeting.png"
import { useActions } from '../../Hooks/coblocks.utils'


const meetings=[
    {
        name:"Design meeting",
        
        team:[
            {
                img:staff1,
                name:"Alex"
            },
            {
                img:staff1,
                name:"Brian"
            }
         ]
       
    },

  

]


const Meeting=({meet})=>{

    return(
        <div className='w-full flex space-x-4 '>
            <img src={meeetingImg} className="rounded-full h-6 w-6" />
            <main className='flex flex-col space-y-1 l'>
                <h5 className='text-sm font-normal'>{meet?.name}</h5>
                 
                 <div className='flex flex-col items-center space-y-2 '>
                    <h5 className='text-xs font-light '>Attendees</h5>
                    <main className="flex w-full space-x-2">
                      {meet.team.map((attendee)=>{
                         return(
                           <h5 className='flex bg-slate-300 rounded-full items-center space-x-2 py-0.5  px-4'>
                              <img src={attendee.img} className="h-4 w-4 rounded-full"/>
                              <span className='text-xs text-slate-600'>{attendee?.name}</span>
                           </h5>
                         )
                      })

                      }

                    </main>
                 </div>
            </main>

        </div>
    )
}

export default function Dashboard() {
    const {initializeUser , initialized,findDevAccounts} = useActions()
    useEffect(()=>{
         findDevAccounts()
    },[]
    )

  return (
    <div className='px-14 text-black'>
          
       
        <div  className='flex items-center space-x-6 py-8'>
           <h5 className='text-lg font-semibold text-slate-600'>Dev's dashboard</h5>
           <h5 className='text-xs font-semibold text-slate-400 '>{"Ui/Ux"}</h5>
        </div>
        
        
        <div className=' bg-white px-10 py-4 rounded-md w-full'>
            <div className='flex items-center w-full justify-between '>
                <main className='flex items-center space-x-8 w-1/4'>
                    <img src={staff1} className="h-16 w-16 rounded-full" />

                    <h5 className='flex flex-col space-y-1'>
                         <span className='text-2xl font-semibold'>{"Alex James"}</span>
                         <span className='text-xs font-semibold'>{"Lagos,Nigeria"}</span>

                    </h5>

                </main>
                <main className=' flex items-center  w-2/4 justify-center space-x-4'>
                    <h5 className='bg-slate-200 p-2 rounded-full'>
                        <AiOutlineMail className='text-lg  text-slate-600'/>

                    </h5>

                    <h5  className='bg-slate-200 p-2 rounded-full'>
                        <TiAttachmentOutline className='text-lg text-slate-600'/>
                        
                    </h5>

                </main>
                
                <main className=' flex items-center  w-1/4'>
                {initialized&&
                     <button className='bg-blue-400 rounded-md py-1 px-4 text-white'
                       onClick={()=>initializeUser}
                     >Initialize profile</button>
                }
                 {!initialized&&
                     <span className='text-sm font-semibold'></span>
                }
                </main>

            </div>

        </div>

          <div className='flex w-full'>
            
              <main className='w-3/5'>
                  <Outlet />
              </main>

             <main className='w-2/5 py-20 px-4'>
                <div className=' w-full bg-white h-72 rounded-md py-6 px-4'>
                     <div className='flex w-full bg-slate-300 rounded-full  px-4 items-center h-8 py-4 justify-between'>
                        <h5 className='flex items-center space-x-2 '>
                            <span className='text-xs text-slate-500'>Tasks</span>
                            <span className='text-xs bg-orange-500 text-white flex justify-center items-center p-1 px-2 rounded-full'>{"0"}</span>

                        </h5>
                        <h5 className='flex items-center space-x-2 '>
                           <span className='text-xs text-slate-500'> Teams</span>
                           <span className='text-xs bg-orange-500 text-white flex justify-center items-center p-1 px-2 rounded-full'>{"0"}</span>
                        </h5>
                        <h5 className='flex items-center space-x-1 ' >
                            <span className='text-xs text-slate-500'>Invites</span>
                            <span className='text-xs bg-orange-500 text-white flex justify-center items-center p-1 px-2 rounded-full'>{"0"}</span>
                        </h5>
                     </div>
                      

                     <div className='py-8 w-full'>
                        <div className='flex w-full items-center justify-between'>
                            <h5 className='text-sm font-semibold'>Next meeting</h5>
                            
                            <div className='flex items-center space-x-4'>
                                <BsGrid />
                                <GrHomeOption />
                            </div>
                        </div>
                         

                         <div className='flex flex-col py-4'>
                            {meetings.map((meet)=>{

                                return(
                                    <Meeting meet={meet}/>
                                )
                            })

                            }

                         </div>

                      
                    </div>

                 
                </div>
               



             </main>

          </div>

    </div>
  )
}
