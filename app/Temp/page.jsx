"use client"
import React from "react";
import './page.css';
import { IoMenuSharp } from "react-icons/io5";
import user from '../../Assets/user.png'


const Navbar = () => {
    return(
        <nav className="flex-nav">
            <div className="nav-left flex-nav">
                <IoMenuSharp className="icon"/>
                <h4>Alphabet</h4>
            </div>
            <div className="nav-right flex-nav">
                <img src={user} alt="user" />
                <h2>Abhishek Jha</h2>
            </div>
        </nav>
    )
}

export default Navbar