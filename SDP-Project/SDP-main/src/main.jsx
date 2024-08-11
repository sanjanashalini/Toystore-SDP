import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import App from './App'
import { ThemeProvider } from './components/theme-provider'
import { CartProvider } from './pages/User/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <CartProvider>
      <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
