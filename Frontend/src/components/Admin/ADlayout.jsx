import React from 'react'
import { Outlet } from 'react-router-dom'
import ADheader from './ADheader'
import ADsidebar from './ADsidebar'

const ADlayout = () => {
  return (
    <div className=' flex min-h-screen w-full'>
      <ADheader />
      <div className='flex flex-1 flex-col'>
          <ADsidebar/>
        <main className=' flex flex-1 bg-muted/50 p-4 md:px-6'>
          <Outlet/>
        </main>

      </div>
      
    </div>
  )
}

export default ADlayout
