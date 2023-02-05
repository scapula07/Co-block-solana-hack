import React from 'react'
import {MdNotifications} from "react-icons/md"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Header() {
  return (

    <div className=' text-black w-full fixed h-20 px-4'>
        <div className='flex justify-between h-full'>
         <main className='w-1/5 flex flex-start items-center h-full'>
           <h5 className='text-lg font-semibold'>CO-BLOCK</h5>
           
         </main>
         <main className='w-4/5 flex  items-center justify-between'>
              <div className='flex space-x-10 w-3/5'>
                  <h5>Dashboard</h5>
                  <h5>Documents</h5>
                  <h5>Teams</h5>
              </div>
            <div className='flex items-center w-2/5 px-4 space-x-20'>
                <MdNotifications />

                {/* <h5>Connect wallet</h5> */}
                <  WalletMultiButton style={{"background-color":"rgb(96 165 250)"}}/>
 
            </div>
     
         </main>



       </div>

    </div>
  )
}
