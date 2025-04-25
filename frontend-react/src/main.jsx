import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {RouterProvider } from 'react-router-dom';
// import route from './lib/routes';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App />
  
  </StrictMode>
)
