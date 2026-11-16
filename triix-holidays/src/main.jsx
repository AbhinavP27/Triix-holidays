import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastProvider } from './context/ToastContext'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'leaflet/dist/leaflet.css'
import './styles/global.css'
import './styles/Toast.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ToastProvider>
      <App />
    </ToastProvider>

  </React.StrictMode>
)