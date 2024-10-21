"use client"
import React from 'react'
import Image from 'next/image'
import user from '../../../Assets/user.png'
import { IoMenu } from "react-icons/io5";
import './tcNavbar.css';

export default function TCNavbar(){
  return (
    <nav className='TCNavbar flex-TCnav-div'>
        <div className="TCNavbar-left flex-TCnav-div">
            <div className="menu-icon"><IoMenu className='icon' /></div>
            <div className="div flex-TCnav-div">
                <h1>Welcome: </h1>
                <h2>Welcome</h2>
                <p>Abhishek Jha</p>
            </div>
        </div>
        <div className="TCNavbar-right flex-TCnav-div">
            <Image src={user} className='teacher-icon' />
            <div className="tc-detail">
                <h2>2024-2025</h2>
                <p>Employee ID: <span>QRI667677</span></p>
            </div>
        </div>
    </nav>
  )
}
