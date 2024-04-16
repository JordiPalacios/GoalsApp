import React from 'react'
import ReactDOM from 'react-dom/client'
import MetasApp from './MetasApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoalMemory } from './context/GoalContext.jsx'
import { MenuProvider } from './context/MenuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoalMemory>
      <MenuProvider>        
        <BrowserRouter>       
            <MetasApp />
        </BrowserRouter>
      </MenuProvider>
    </GoalMemory>
  </React.StrictMode>,
)
