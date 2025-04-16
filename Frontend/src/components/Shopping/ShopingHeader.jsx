import { HomeIcon,   } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { SheetTrigger, Sheet, SheetContent } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { userMenuItems } from '@/config/Config'

const MenuItems= ()=>{
  

  return (
    <nav className='flex flex-col mb-3 lg:mb-0 lg:flex-row lg:items-center gap-6  '>
      {
        userMenuItems.map((item)=>{
          return <Link className='font-medium text-sm ' to={item.path} key={item.id}>{item.label}</Link>
        })
      }

    </nav>
  )
    
  
}


const ShopingHeader = () => {
  const [menuItemOpen, setMenuItemOpen] = useState(false)
  return (
    <header className="shoping-header sticky top-0 z-50 bg-white border-b ">
      <div className='flex items-center justify-between px-4 md-px-6 h-16'>
        <Link className='flex items-center gap-2  ' to='/shop/home'>
              <HomeIcon className='w-6 h-6' />
             <span className='font-bold'>E-Commerce</span>
        </Link>
        <Sheet open={menuItemOpen} onOpenChange={setMenuItemOpen}>
          <SheetTrigger aschild >
            <Button variant={'outline'} size={"icon"} className='lg:hidden'>
              <Menu className='w-6 h-6' />
              <span className='sr-only'>Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'  className={"w-60 max-w-xs px-10 py-10  rounded-br-2xl rounded-tr-xl"}>
                <MenuItems  />
          </SheetContent>
        </Sheet>
        <div className=' hidden lg:block'>
        <MenuItems />
        </div>
        <div>
          
        </div>
      </div>

    </header>
  )
}

export default ShopingHeader
