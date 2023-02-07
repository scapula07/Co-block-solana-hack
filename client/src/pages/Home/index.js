import React from 'react'
import Header from '../../components/Header'
import heroImg from "../../assets/teamwork.jpeg"
import audiusImg from "../../assets/audiusImg.jpeg"
import civicImg from "../../assets/civicImg.jpeg"
import orcaImg from "../../assets/orcaImg.png"
import raydiumImg from "../../assets/raydiumImg.png"
import solanaImg from "../../assets/solanaImg.png"


export default function Home() {
  return (
    <div className='h-full'>
       <Header />
       
       <div className='flex w-full py-44 px-10 ' >
          <main className='w-1/2'>
              <p>
                <span className='text-3xl font-semibold'>
                   Co-block ,the one platform to find contributors
                </span> 
                 <br></br>
                <span className='text-2xl font-semibold'>
                  on open source web3 projects.
                </span>
                  
              </p>
              <main className='w-full flex justify-center  py-14'>
                  <div className='border-l-8 border-blue-400 w-36  '>
                      <h5 className='text-xl text-slate-600  font-normal'>Learn more</h5>
                  </div>
              </main>

              <div className='w-full flex px-10 py-20 space-x-10 justify-center'>
                <p className='text-sm text-slate-600'>
                 Lorem ipsum dolor sit amet,
                 <br></br>
                 consectetur adipiscing elit, 
                 <br></br>
                 sed do eiusmod tempor
                </p>
                <p className='text-sm text-slate-600'>
                   Lorem ipsum dolor sit amet,
                   <br></br>
                    consectetur adipiscing elit,
                    <br></br>
                     sed do eiusmod tempor
                </p>
              </div>
             
          </main>
          <main className='w-1/2 '>
              <img 
                src={ heroImg}
                className="w-full "
              />
          </main>

       </div>


       <div className='flex w-full '>
          <main className='w-1/2'>

          </main>

          <main className='bg-blue-400 w-1/2 px-4 py-6'>
              <h5 className='text-white flex text-sm'>Latest</h5>

              <h5 className='text-white flex text-lg font-semibold'>Projects</h5>

              <div className='overflow-x-scroll w-full -ml-20 py-4'>
                 <div className='flex space-x-6 ' style={{width:"150%"}}>
                {projects.map((project)=>{
                    return(
                       <div className='w-3/4 bg-white rounded-md'>
                           <img src={project.img}
                             className="w-full h-24"
                           />

                           <h5 className='text-xs font-semibold py-2'>{project.name}</h5>
                            
                            {""}


                       </div>
                    )
                })

                }

              </div>

              </div>
            
           </main>

       </div>

    </div>
  )
}





const projects=[
  {
      name:"Solana",
      img:solanaImg ,
      description:"Sed ut perspiciatis unde omnis"


  },
  {
      name:"Civic",
      img:civicImg ,
      description:"Sed ut perspiciatis unde omnis"


  },
  {
      name:"Audius",
      img:audiusImg ,
      description:"Sed ut perspiciatis unde omnis"


  },
  {
      name:"Raydium",
      img:raydiumImg ,
      description:"Sed ut perspiciatis unde omnis"


  },
  {
      name:"Audius",
      img:audiusImg ,
      description:"Sed ut perspiciatis unde omnis"


  },
  {
      name:"Orca",
      img:orcaImg ,
      description:"Sed ut perspiciatis unde omnis"


  }
]