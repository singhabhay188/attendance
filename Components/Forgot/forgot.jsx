"use client"
import React from 'react'
import './forgot.css'
import { MdEmail } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

export default function forgot() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <div className="login-forgot">
            <form onSubmit={handleSubmit}>
                <h1>Forgot</h1>
                <div className="input-box">
                    <input type="email" placeholder="Enter Your Mail" required />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="DD/MM/YYYY" />
                    <MdDateRange className="icon" />
                </div>
                <button type="submit">Reset</button>
            </form>
        </div>
    )
}


