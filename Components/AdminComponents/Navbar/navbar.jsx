"use client"
import React from "react";
import './navbar.css';
import { IoMenuSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";



const Navbar = () => {
    return(
        <nav className="flex-nav">
            <div className="nav-left flex-nav">
                <IoMenuSharp className="icon"/>
                <h4>Alphabet</h4>
            </div>
            <div className="nav-right flex-nav">
                <FaRegUserCircle id="user-img" />
                <h2>Abhishek Jha</h2>
            </div>
        </nav>
    )
}

export default Navbar