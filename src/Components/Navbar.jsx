import React from 'react';
import './Navbar.css';
import img2 from "../images/bike.jpg";
import { Link } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='container'>
     
   
    
    <div className="searchbox">
    <img src={img2} alt='' className='logo' style={{ width: '100px', height: '80px' }} />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<FaSearch />
      <input type='text'   placeholder='search'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src='' alt=''/>
      <Link to="/login">
  <button className='semi-round-btn'>Login</button>
</Link>

<button className='semi-round-btn'>Signup</button>




    </div>
    <ul className='bar'>
    <li>Home</li>
    <Link path="/login" > <li>Login</li></Link>
   
    <li>Signup</li>
    <li>Mechanic</li>
    
    <li>Contact Us</li>
    <li>About us</li>
    <li>Video</li>
    <li>Acessories</li>
    
    <li>FAQs</li>
    

    </ul>
    
    <img src=' ' alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar