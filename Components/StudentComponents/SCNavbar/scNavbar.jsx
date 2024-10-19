"use client"
import React from 'react'
import Image from 'next/image'
import user from '../../../Assets/user.png'
import { IoMenu } from "react-icons/io5";
import './scNavbar.css'

export default function SCNavbar(){
  return (
    <nav className='SCNavbar flex-SCnav-div'>
        <div className="SCNavbar-left flex-SCnav-div">
            <div className="menu-icon"><IoMenu className='icon' /></div>
            <div className="div flex-SCnav-div">
                <h1>Welcome: </h1>
                <h2>Welcome</h2>
                <p>Abhishek Jha</p>
            </div>
        </div>
        <div className="SCNavbar-right flex-SCnav-div">
            <Image src={user} className='student-icon' />
            <div className="sem-detail">
                <h2>2024-2025</h2>
                <p>Semester: <span>7</span></p>
            </div>
        </div>
    </nav>
  )
}
