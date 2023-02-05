import React from 'react'
import DocumentSearch from './documentSearch'
import {GrDocument} from "react-icons/gr"
import {FaListUl} from "react-icons/fa"
import {BsFillGrid1X2Fill,BsFilterRight} from "react-icons/bs"
import {AiOutlineCloudUpload} from "react-icons/ai"


export default function  Documents() {
  return (
    <div className='w-full'>
        <div className='flex w-full space-x-1 '>
            <div className='w-1/5  py-4'>
                 <div className='flex flex-col space-y-12'>
                    <main className='flex flex-col items-center space-y-4 w-full'>
                        <button className='bg-blue-400 rounded-sm px-6 py-2 w-full'>Create new document</button>
                        <DocumentSearch />
                    </main>
                    <main className='flex flex-col space-y-8 w-full'>
                       <div className='flex items-start flex-col  text-slate-400'>
                           <h5 className='text-sm font-semibold'>Private</h5>
                       </div>

                       <div className='flex items-start flex-col text-slate-400'>
                           <h5 className='text-sm font-semibold'>Shared folders</h5>
                       </div>
                    </main>

                 </div>
            </div>
            <div className='w-4/5 flex flex-col items-start py-4 px-8 space-y-4'>
                <div className='w-full flex flex-col items-start rounded-md  bg-white  px-4 py-2 ' style={{height:"73vh"}}>
                    <div>
                    <h5 className='text-3xl font-semibold text-slate-500 w-full'>Documents</h5>
                    </div>
                    
                    <div className='flex text-slate-500 py-8 space-x-4 w-full '>
                        <h5 className='text-sm font-semibold bg-slate-100 flex justify-center items-center py-2 rounded-md w-1/4' >All Documents</h5>
                        <h5 className='text-sm font-semibold bg-slate-100  flex justify-center space-x-2 items-center py-2 rounded-md w-1/4'><GrDocument /> <span>Drafts</span></h5>
                        <h5 className='text-sm font-semibold bg-slate-100 flex justify-center  space-x-2  items-center py-2 rounded-md w-1/4'><GrDocument /> <span>Pending Contracts</span> </h5>
                        <h5 className='text-sm font-semibold bg-slate-100 flex justify-center  space-x-2  items-center  py-2 rounded-md w-1/4'><GrDocument /><span>Signed Contracts</span> </h5>
                    </div>

                    <div className='flex w-full justify-between'>
                        <main className='w-2/5'></main>
                        <main  className='w-3/5 '>
                        <div className='flex justify-end w-full'> 
                        <h5 className='text-sm font-semibold  text-slate-500 flex justify-center space-x-2 items-center py-2 rounded-md w-1/4'> 
                              <span>Type of lists: </span>
                               <FaListUl />
                               <BsFillGrid1X2Fill />
                        </h5>

                        <h5 className='text-sm font-semibold  text-slate-500 flex justify-center space-x-2 items-center py-2 rounded-md w-1/4'> 
                              <span>Filters: </span>
                               <BsFilterRight className='text-lg font-semibold' />
                              
                        </h5>

                        <h5 className='text-sm font-semibold  text-slate-500 flex justify-center space-x-2 items-center py-2 rounded-md w-1/4'> 
                              <span>Sort by name: A - Z </span>
                              
                              
                        </h5>
                        </div>
                      
                        </main>
                    </div>

                    <div className='w-full flex justify-center items-center border py-4  border-dashed mt-4 '>
                         <h5 className='flex items-center space-x-2 text-slate-500'>
                            <AiOutlineCloudUpload />
                            <span className='text-sm font-semibold'>Upload documents</span>
                            
                            </h5>
                    </div>

                </div>
                </div>
              

        </div>


    </div>
  )
}
