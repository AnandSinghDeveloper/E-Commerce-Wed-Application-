import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopingHeader from './ShopingHeader'

const Shoplayout = () => {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        <ShopingHeader/>
       <main className='flex w-full flex-col'>
          <Outlet/>
       </main>
    </div>
  )
}

export default Shoplayout
