import { Card } from '@/components/ui/card'
import React from 'react'

const ShopProductTile = ({product}) => {
  return (
   <Card className={ "w-full mx-auto max-w-sm"}>
   <div>
   <div className="relative">
         <img src={product.image} alt={product.title} className="w-full h-[300px] object-cover rounded-lg" />
      </div>
   </div>

   </Card>
  )
}

export default ShopProductTile
