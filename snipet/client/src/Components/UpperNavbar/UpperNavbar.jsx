import React, { Component } from 'react';
import './UpperNavbar.css';
import {Link} from 'react-router-dom';
class UpperNavbar extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
            <nav className="navbar navbar-expand-sm navbar-light custom-upper-navbar">
    <a className="navbar-brand" href="#"><img src = {require('../img/logo.png')} className="img-fluid"/></a>
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">☰</button>  */}
    <div className="collapse navbar-collapse custom-below-uppernavbar" id="navbar-collapse">
        <ul className="nav navbar-nav ml-auto">
           <li className="nav-item active custom-login-upper"> <a className="nav-link" href="">User</a>
            </li>
        </ul>
    </div>
</nav>

	
        

                
            </div>
            </React.Fragment>
        );
    }
}

export default UpperNavbar;