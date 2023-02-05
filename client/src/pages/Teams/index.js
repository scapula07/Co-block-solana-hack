import React from 'react'
import {BsFillGridFill,BsFilterRight} from "react-icons/bs"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {MdAdd} from "react-icons/md"
import audiusImg from "../../assets/audiusImg.jpeg"
import civicImg from "../../assets/civicImg.jpeg"
import orcaImg from "../../assets/orcaImg.png"
import raydiumImg from "../../assets/raydiumImg.png"
import solanaImg from "../../assets/solanaImg.png"


const TeamCard=({team})=>{

    return(
        <div className='bg-white w-full text-black px-2 py-4'>
            <h5 className='flex w-full justify-end text-xs '>
               <button className='bg-blue-400 text-slate-600 px-4 py-0.5 rounded-md'> Join team</button>
            </h5>

            <div className='flex flex-col items-center py-4 space-y-2'>
                 <img  src={team.img} className="rounded-full h-10 w-10" />
                 <h5 className='text-sm font-semibold'>{team.name}</h5>
                 <p className='text-xs'>
                   {team.description}
                 </p>
                 
                 
            </div>

        </div>
    )
}



export default function Teams() {
  return (
    <div className='text-black px-10 py-8'>
          <div className='bg-white w-full flex justify-between px-4 py-4 rounded-md'>
            <main className='flex items-center space-x-4'>
               <BsFillGridFill className='text-slate-400 text-lg'/>
               <BsFilterRight  className='text-slate-400 text-lg' />
               <select className='text-slate-400 text-sm font-semibold'>
                 <option >Sort by latest</option>
               </select>
               
            </main>
            <main className='flex items-center '>
                <button className='flex  space-x-2 items-center bg-blue-400 px-4 py-2 rounded-lg '>
                    <MdAdd className='text-white text-lg' />
                    <span className='text-xs text-white font-semibold'>Create a team</span>
                </button>

            </main>
          </div>

          <div className=' py-8'>
              <h5 className='text-lg font-semibold text-slate-600 flex'>All Teams (0)</h5>
              
              <div className='flex'>


               </div>

               <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-6 pt-8 w-full">
                   {teams.map((team)=>{
                      

                      return(
                        <TeamCard team={team} />
                      )
                   })

                   }
               </div>
          </div>
    </div> 
  )
}



const teams=[
    {
        name:"Lorem ipsum",
        img:solanaImg ,
        description:"Sed ut perspiciatis unde omnis"


    },
    {
        name:"Lorem ipsum",
        img:civicImg ,
        description:"Sed ut perspiciatis unde omnis"


    },
    {
        name:"Lorem ipsum",
        img:audiusImg ,
        description:"Sed ut perspiciatis unde omnis"


    },
    {
        name:"Lorem ipsum",
        img:raydiumImg ,
        description:"Sed ut perspiciatis unde omnis"


    },
    {
        name:"Lorem ipsum",
        img:audiusImg ,
        description:"Sed ut perspiciatis unde omnis"


    },
    {
        name:"Lorem ipsum",
        img:orcaImg ,
        description:"Sed ut perspiciatis unde omnis"


    }
]