import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' flex min-h-screen w-full'>
      <div className='hidden lg:flex justify-center items-center w-1/2 bg-slate-800 px-12'>
        <div className='max-w-md space-y-6 text-center text-primary-foreground'>
          <h1 className='text-4xl font-extrabold tracking-tight '>
            Welcome E-commerce Shopping
          </h1>
        </div>
      </div>
         <div className='flex flex-1 justify-center items-center  bg-background py-12 px-4 sm:px-6 lg:px-8'>
          <Outlet/>
         </div>
      
    </div>
  )
}

export default Layout
