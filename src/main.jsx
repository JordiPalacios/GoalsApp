import React from 'react'
import ReactDOM from 'react-dom/client'
import MetasApp from './MetasApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoalMemory } from './context/GoalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoalMemory>
      <BrowserRouter>       
          <MetasApp />
      </BrowserRouter>
    </GoalMemory>
  </React.StrictMode>,
)
