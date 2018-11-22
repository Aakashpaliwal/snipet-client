import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark custom-upper-navbar">
    {/* <a className="navbar-brand" href="#">Nikhil Comforts</a> */}
    <button className="navbar-toggler custom-navbar-btn" type="button" data-toggle="collapse" data-target="#navbar-collapse">☰</button> 
    <div className="collapse navbar-collapse custom-below-navbar" id="navbar-collapse">
        <ul className="nav navbar-nav">
            <Link to="/"><li className="nav-item active"> <a className="nav-link" href="">Home</a>
            </li></Link>
            <li className="nav-item nav-link">
            <Link to="/About">Aptitude</Link>
            </li>
           <li className="nav-item nav-link">
           <Link to ="/Projects"> English</Link>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Career">DI</Link></a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Blog">Reasoning</Link></a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Blog">GK</Link></a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Blog">Cureent Affairs</Link></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Computer</a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item custom-a-color" href="#"><Link to ="/HVAC">Computer Networking</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Electrical">Network</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Firefighting">SQL</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Interiors">Database</Link></a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Programming</a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item custom-a-color" href="#"><Link to ="/HVAC">Java</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Electrical">C++</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Firefighting">Python</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Interiors">Javascript</Link></a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Engineering</a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item custom-a-color" href="#"><Link to ="/HVAC">Computer Science</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Electrical">Electrical Engineering</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Firefighting">Mechanical Engineering</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Interiors">Civil Engineering</Link></a>
                </div>
            </li>
            <li className="nav-item custom-login-link"> <a className="nav-link" href="#"><Link to ="/Blog">Login</Link></a>
            </li>
        </ul>
    </div>
</nav>

	
        
        
      </div>
    )
  }
}

export default Navbar
