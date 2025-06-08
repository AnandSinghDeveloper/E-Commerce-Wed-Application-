import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { useState } from 'react'
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from '../ui/table'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import OderDetails from './ShopingOrderDetails'

const Order = () => {
  const [openOderDetails, setOpenOderDetails] = useState(false)
  return (
    <Card>   
        <CardHeader>Order History</CardHeader>
         <CardContent className={'w-full'}>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead> Order Date</TableHead>
            <TableHead> Order Status</TableHead>
            <TableHead> Order Amunot </TableHead>
            <TableHead className={"sr-only"}>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1516465116</TableCell>
            <TableCell>2022-07-01</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>Rs. 1000</TableCell>
            <TableCell>
              <Dialog open={openOderDetails} onOpenChange={() => {setOpenOderDetails(!openOderDetails)}}>
                <Button onClick={() => {setOpenOderDetails(!openOderDetails)}}>View Details</Button>
                <OderDetails />
              </Dialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </CardContent>
      

    </Card>
  )
}

export default Order
