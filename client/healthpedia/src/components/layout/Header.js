
import React from 'react';
import {
    Link
} from 'react-router-dom';
import healhtpediaLogo from '../../assets/healhtpediaLogo.png'


const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="#"><img src={healhtpediaLogo} height="75px" /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/healthpedia">Healthpedia</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
           
            <li className="nav-item">
                <Link className="nav-link" to="/signin">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signout">Logout</Link>
            </li>
       
        </ul>
    </div>
</nav>
    </>
  )
}

export default Header
