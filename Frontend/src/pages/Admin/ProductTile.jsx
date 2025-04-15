import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'

const ProductTile = ({product}) => {
  console.log(product);
  
  return (
    <Card className={' w-full border-2 bg-transparent  backdrop-blur-md  cart'}>
      <div>
        <div className=' relative top-0 pl-5 pr-5'>
          <img src={product.image} alt={product.title} className={'w-full h-86 object-cover object-center rounded-b-lg  rounded-t-lg'} />

        </div>
        <CardContent>
          <h2 className={'text-2xl text-zinc-900 font-[ubuntu] font-bold mb-2 mt-2'}>{product.title}</h2>
          <div className='flex items-center justify-between mb-2'>
               <span className={`${product.sellingPrice > 0 ? ' ' :""   }font-semibold text-md line-through `}>${product.price}</span>
               <span className='font-semibold text-medium text-primary'>${product.sellingPrice}</span>
          </div>
        </CardContent>
        <CardFooter className={'flex flex-col w-full justify-between  '}>
          <Button className={'mb-2 w-full bg-gray-400 hover:bg-gray-600'}> Edit Product </Button>
          <Button className={'w-full bg-slate-500 hover:bg-slate-600' }> Delete Product </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

export default ProductTile
