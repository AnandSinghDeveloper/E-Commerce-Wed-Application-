import React, { useEffect } from 'react'
import Loader from '../loading/Loader'
import { AuroraText } from '@/components/magicui/aurora-text'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { capturePayment } from '@/store/Shop/OderSlice';

const PaypalReturn = () => {

   const dispatch = useDispatch();
   const location = useLocation();
   const params = new URLSearchParams(location.search);
   const paymentId = params.get('paymentId');
   const payerID = params.get('PayerID');

   useEffect(() => {
      if(paymentId && payerID){
        const orderId =  JSON.parse(sessionStorage.getItem("orderId")); 
         dispatch(capturePayment({paymentId,payerID,orderId})) .then((data) => {
            if (data?.payload?.success) {
              sessionStorage.removeItem("orderId");
              window.location.href = "/shop/paymentsuccess";
              
              
            }
          });
      }
   }, [ paymentId,payerID,dispatch ])
  return (
    <div className='flex justify-center h-screen w-full items-center'>
     <div className='flex flex-col justify-center items-center gap-5'>
       <Loader size={500} />
      <h1 className='text-2xl font-semibold'> <AuroraText> Progressing Payment Plese Wait ... </AuroraText></h1>
     </div>
    </div>
  )
}

export default PaypalReturn
