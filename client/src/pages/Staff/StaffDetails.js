import React,{useState} from 'react'
import {MdOutlineArrowDropDown,MdAdd,MdOutlineEmail} from "react-icons/md"
import {RiAttachment2} from "react-icons/ri"
import {BsThreeDots,BsDot} from "react-icons/bs"
import {AiOutlineClose,AiOutlinePrinter} from "react-icons/ai"
import {GoPrimitiveDot} from "react-icons/go"

const TopBar=()=>{
     return(
        <div className='flex items-center  justify-between px-8 py-4 border-b '>
            <div className='flex space-x-6 text-sm font-semibold '>
                <h5 className='focus:text-blue-700'>Info</h5>
                <h5>Taxes</h5>
                <h5>Invoices</h5>

            </div>

            <div className='flex items-center space-x-4'>
                <h5 className='p-2 rounded-full bg-slate-200 flex justify-center items-center'>
               <  AiOutlinePrinter />
                </h5>
                <h5 className='p-2 rounded-full bg-slate-200 flex justify-center items-center'>
                    <MdOutlineEmail />
                </h5>
                <h5 className='p-2 rounded-full bg-slate-200 flex justify-center items-center'>
                    <RiAttachment2 />
                </h5>
                <h5 className='p-2 rounded-full bg-slate-200 flex justify-center items-center'>
                    <BsThreeDots />
                </h5>

                <h5 className='p-2 rounded-full bg-slate-200 flex justify-center items-center'>
                    <AiOutlineClose />
                </h5>

                 
          </div>
        </div>
     )
}

const StaffInfo=({staffdetails})=>{
    return(
        <div className='flex w-full py-14'>
             <div className=' flex  flex-col w-3/5'>
                <main className='w-full items-start flex-col space-y-2 flex px-14 justify-center'>
                    <h5 className='text-2xl font-semibold'>{staffdetails?.dept}</h5>
                    <h5 className='text-slate-400 font-semibold'>{"#SO-00003"}</h5>
                    <button className='flex items-center bg-orange-500 text-white rounded-full  space-x-2 px-4 opacity-80'>
                        <GoPrimitiveDot className='text-xll' />
                        <span>{"Manager"}</span>
                    </button>

                </main>
                <main></main>


             </div>
             <div  className='w-2/5 flex items-end '>
                <div  className='w-full px-20 flex items-end '>
                    <main className='flex w-full items-start  flex-col'>
                        <h5>{"Employeee"}</h5>
                        <img src={staffdetails?.img} className="rounded-full h-8 w-8"/>
                        <h5>{staffdetails?.name}</h5>
                        <h5>{"50,Popoola,Lagos,Nigeria."}</h5>
                    </main>
                </div>
               
               
             </div>
        </div>
    )
}


const Table=()=>{
    const [renumerationData,setData] =useState([1,2,3,4,5])
    return(
        <div className='bg-slate-200 h-96 px-4 py-2 rounded-md'>
            <div  className='flex  justify-between'>
                <main className='1/5'>
                    <h5 className='text-slate-400 font-semibold'>Date</h5>

                </main>
                <main  className='4/5 flex space-x-10 '>
                    <h5 className='text-slate-400 font-semibold'>Hourly rate</h5>
                    <h5 className='text-slate-400 font-semibold'>Total hours</h5>
                    <h5 className='text-slate-400 font-semibold'>Taxes</h5>
                    <h5 className='text-slate-400 font-semibold'>Insurance</h5>
                  
                    <h5 className='text-slate-400 font-semibold'>Gross pay</h5>

                </main>
              </div>
         
             <div  className='flex flex-col space-y-4 py-4 h-80 overflow-y-scroll '>
                {renumerationData.map(()=>{

                    return(
                    <div  className='flex  justify-between bg-white px-4 py-6 rounded-lg'>
                        <main className='1/5'>
                            <h5 className='text-slate-400 font-semibold'>{"Dec ,2022"}</h5>
        
                        </main>
                        <main  className='4/5 flex space-x-14 '>
                            <h5 className='text-slate-400 font-semibold'>{"$20"}</h5>
                            <h5 className='text-slate-400 font-semibold'>{"180"}</h5>
                            <h5 className='text-slate-400 font-semibold'>{"$1200"}</h5>
                            <h5 className='text-slate-400 font-semibold'>{"$ 200"}</h5>
                          
                            <h5 className='text-slate-400 font-semibold'>{"$ 2100"}</h5>
        
                        </main>
                      </div>
                    )
                })

                }

              </div>
           
        </div>
    )
}

export default function StaffDetails({staffdetails}) {
  return (
    <div className='w-full'>
       <TopBar />
       
       <StaffInfo staffdetails={staffdetails}/>
        <div className='px-8 py-4'>
          <Table />
        </div>
     

    </div>
  )
}
