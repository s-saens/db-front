import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User from './User.jsx'
import './index.css'
import Recommendation from './Recommend.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Recommendation />
  </React.StrictMode>,
)
