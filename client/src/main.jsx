import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Emi: you don't do that with Vite, it's when you use the dotenv in Node
// import dotenv from 'dotenv';
// dotenv.config();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
