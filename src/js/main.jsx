import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
//                   html      del  id      root 
ReactDOM.createRoot(document.getElementById('root')).render(
  // muestra el componente home
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
