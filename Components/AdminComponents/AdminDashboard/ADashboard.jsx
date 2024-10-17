import React from "react";
import './ADashboard.css'
import { FaRegUserCircle } from "react-icons/fa";


export default function AdminDashboard() {
    return(
        <div className="admin-dashboard">
            <div className="admin-cards">
                <div className="card1 user-inform">
                    <FaRegUserCircle className="user-img-dash" />
                    <div className="user-info">
                        <h1>Abhishek Jha</h1>
                        <p>Employee ID: <span>QER54545</span></p>
                        <p>Designation: <span>Admin</span></p>
                        <p>Phone No: <span>9650376995</span></p>
                        <p>Joining Date: <span>DD/MM/YYYY</span></p>
                        <p>Blood Group: <span>AB+</span></p>
                    </div>
                </div>
                <div className="card1">
                    <h2>Total Students</h2>
                    <p>1245</p>
                </div>
                <div className="card1">
                    <h2>Total Teachers</h2>
                    <p>80</p>
                </div>
                <div className="card1">
                    <h2>Upcoming Events</h2>
                    <p>4</p>
                </div>
                <div className="card1">
                    <h2>Total Student Attendance</h2>
                    <p>50%</p>
                </div>
                <div className="card1">
                    <h2>Total Teacher Attendance</h2>
                    <p>60%</p>
                </div>
            </div>
        </div>
    )
}