import React from 'react';
import App from './App';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Error from './pages/Error/Error'
import Dashboard from './pages/Dashboard/Dashboard'

import 'animate.css'
import ReactDOM from "react-dom/client";
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 

root.render(<Router>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/dashboard' element={<Dashboard/>}/>

    <Route path='*' element={<Error />}/>

  </Routes>
</Router>);
  
  