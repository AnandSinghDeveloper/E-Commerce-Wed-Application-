
// import {  Route } from 'lucide-react'
import Layout from './components/Authentication/Layout'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register'
import ADlayout from './components/Admin/ADlayout'
import ADfeature from './pages/Admin/ADfeature'
import ADorder from './pages/Admin/ADorder'
import ADdashbord from './pages/Admin/ADdashbord'
import ADproducts from './pages/Admin/ADproducts'
import Shoplayout from './components/Shopping/Shoplayout'
import Index from './pages/Not-found/Index'
import ShopingHome from './pages/Shopping/ShopingHome'
import ShopingListing from './pages/Shopping/ShopingListing'
import ShopingCheckout from './pages/Shopping/ShopingCheckout'
import ShopingAccount from './pages/Shopping/ShopingAccount'



function App() {

  return (
    <div className='bg-white overflow-hidden flex flex-col'>
   
     <Routes>
       <Route path="/auth" element={<Layout />}>
         <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
       </Route>
       <Route path="/admin" element={<ADlayout />}>
         <Route path="order" element={<ADorder />} />
         <Route path="dashboard" element={<ADdashbord />} />
         <Route path="products" element={<ADproducts />} />
         <Route path="feature" element={<ADfeature />} />
       </Route>
       <Route path="/Shop" element={<Shoplayout />}>
         <Route path="home" element={<ShopingHome />} />
         <Route path="listing" element={<ShopingListing />} />
         <Route path="account" element={<ShopingAccount />} />
         <Route path="checkout" element={<ShopingCheckout />} />
       </Route>
       <Route path="*" element={<Index />} /> 


     </Routes>
     
    </div>
  )
}

export default App
