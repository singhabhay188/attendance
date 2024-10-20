"use client"
import React from "react";
import "./tcDashboard.css";
import Image from "next/image";
import user from '../../../Assets/user.png'
import { GiTeacher } from "react-icons/gi";
import { MdOutlineAssignment } from "react-icons/md";


const TCDashboard = () => {
  return (
    <div className="TCDashboard">
        <div className="TCCards">
            <div className="TCCard teacher-profile">
                <h4>Profile</h4>
                <div className="teacher-profile-short">
                    <Image src={user} className="teacher-img" />
                    <div className="teacher-profile-info">
                        <h4>Abhishek</h4>
                        <p>Employee ID: <span>QWED454</span></p>
                        <p>DOB: <span>DD/MM/YYYY</span></p>
                        <p>Phone Number: <span>789456123</span></p>
                        <p>Designation: <span>Assitant Professor</span></p>
                    </div>
                </div>
            </div>
            <div className="TCCard">
                <h4>View Class Schedules</h4>
                <table className="class-schedule-short">
                    <thead>
                        <tr>
                            <th>Branch</th>
                            <th>Section</th>
                            <th>Time Slot</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Btech</td>
                            <td>A</td>
                            <td>09:10 to 10:05</td>
                            <td>DSA</td>
                        </tr>
                        <tr>
                            <td>Btech</td>
                            <td>A</td>
                            <td>09:10 to 10:05</td>
                            <td>DSA</td>
                        </tr>
                        <tr>
                            <td>Btech</td>
                            <td>A</td>
                            <td>09:10 to 10:05</td>
                            <td>DSA</td>
                        </tr>
                        <tr>
                            <td>Btech</td>
                            <td>A</td>
                            <td>09:10 to 10:05</td>
                            <td>DSA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="TCCard">
                <h4>Mark Attendance</h4>
                <div className="attendance-short">
                    <GiTeacher className="mark-attendance-icon" />
                </div>
            </div>
            <div className="TCCard">
                <h4>Manage Assignment</h4>
                <div className="attendance-short">
                    <MdOutlineAssignment className="mark-attendance-icon" />
                </div>
            </div>
            <div className="TCCard">
                <h4>Upcoming Event</h4>
                <div className="attendance-short">
                    <MdOutlineAssignment className="mark-attendance-icon" />
                </div>
            </div>
            <div className="TCCard">
                <h4>Notices</h4>
                <div className="attendance-short">
                    <MdOutlineAssignment className="mark-attendance-icon" />
                </div>
            </div>
            <div className="TCCard">
                <h4>Academic Calendar</h4>
                <div className="attendance-short">
                    <MdOutlineAssignment className="mark-attendance-icon" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default AdminSidebar;
