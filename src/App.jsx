import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Landing from './Components/landing';
import './App.css';
import Login from './Components/login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
