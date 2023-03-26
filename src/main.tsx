import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/fonts/Inter-Regular.ttf'
import './assets/fonts/Inter-Bold.ttf'
import './assets/fonts/Inter-ExtraBold.ttf'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
