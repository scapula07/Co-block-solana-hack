import React from 'react'
import SideNavs from '../components/SideNav'
import Header from '../components/Header'
import "./layout.css"

export default function Layout({children}) {
  return (
    <div className="layout text-black bg-slate-200 h-screen text-white  overflow-x-hidden ">
        <div className='flex w-full'>

          <main className='width-sidenavs'>
           <SideNavs  />
          </main>
          <main className='width-main'>
             <Header />

             <div className="page   py-20 ">
                    {children}

                
              </div>
          </main>

        </div>
    
    </div>
  )
}
