import React,{useState} from 'react'
import {MdOutlineArrowDropDown,MdAdd,MdOutlineEmail} from "react-icons/md"
import {BsFilterLeft} from "react-icons/bs"
import {FiSearch} from "react-icons/fi"
import StaffCard from './staffCard'
import staff1 from "../../assets/staff1.png"
import staff2 from "../../assets/staff2.png"
import {RiDeleteBin6Line} from "react-icons/ri"
import StaffDetails from './StaffDetails'






export default function Staff() {
  const [staffdetails,setStaff]=useState({})
  return (
    <div className='text-black'>
        <div className='flex space-x-8'>
             <div className='w-2/6 flex flex-col'>
                  <main className='bg-white flex px-4 justify-between py-4 rounded-lg ' >
                    <h5 className='flex items-center space-x-4 w-2/5'>
                      <span className='font-bold text-sm '>All staff </span>
                      <MdOutlineArrowDropDown  className='text-2xl font-bold '/>
                    </h5>
                    
                    <main className='flex space-x-4 items-center'>
                        <BsFilterLeft className='text-2xl text-slate-400' />
                        <FiSearch className='text-2xl text-slate-400'/>
                        <h5 className='bg-blue-400 rounded-full flex justify-center items-center p-2'>
                          <MdAdd className='text-white'/>

                        </h5>

                    </main>
                      
                  </main>

                  <main className='flex flex-col space-y-4 py-8   overflow-y-scroll relative' style={{height:"73vh"}}>
                    {staff.map((staff)=>{

                      return(
                        <StaffCard  staff={staff} setStaff={setStaff} />
                      )
                      })

                    }

                    <div className='bg-black rounded-full w-full absolute bottom-10 py-4 '>

                    </div>
                    
                    
                  </main>


             </div>
             <div className='w-3/5 bg-white rounded-lg '>
                <StaffDetails staffdetails={staffdetails} />
             </div>

        </div>


    </div>
  )
}


const staff=[
  {
    img:staff1,
    name:"Alex James",
    dept:"Marketing"
  },
  {
    img:staff2,
    name:"Shelly James",
    dept:"Human resources"
  },
]