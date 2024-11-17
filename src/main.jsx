import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Appcv from './Appcv.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appcv />
  </StrictMode>,
)
