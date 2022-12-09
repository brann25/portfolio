import React from 'react'
import { Link } from 'react-router-dom';
import './Page_Landing.scss';
import logo from '../component/svg/logo_full.svg'

export default function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light">
            {/* <a className="navbar-brand" href="#">Navbar</a> navbar-light bg-light*/}
            <a class="navbar-brand" href="#">
            <img src={logo} width="10%" height="10%" class="d-inline-block align-top" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to ='/'>Home</Link></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href='https://www.linkedin.com/in/bannawit-brann-khatiiyanont/' target="_blank" rel="noopener noreferrer">LinkedIn <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to ='/aboutme'>About Me</Link></a>
                </li>
                </ul>
            </div>
        </nav>
  )
}
