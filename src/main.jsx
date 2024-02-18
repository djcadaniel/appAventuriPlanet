import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.css'
import { AppAventuri } from './AppAventuri'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppAventuri />
    </React.StrictMode>
  </BrowserRouter>
)