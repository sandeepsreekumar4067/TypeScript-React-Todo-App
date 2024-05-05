import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Interface from './components/interface'
import Loginpage from './components/login'
import SignUp from './components/signup'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignUp/>
  </React.StrictMode>,
)
