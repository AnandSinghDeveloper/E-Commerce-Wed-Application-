import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <Provider store={store}>
       <App />
       <Toaster richColors /> {/* Add this line */}
    </Provider>
   </BrowserRouter>
  </StrictMode>,
)
