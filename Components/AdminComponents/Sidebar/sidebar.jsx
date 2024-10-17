"use client"
import React from "react";
import "./sidebar.css";
import { MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="sidebar-admin">
      <h1>Admin Panel</h1>
      <div className="shortcut-links">
        <div className="side-link">
          <MdDashboard className="icon" />
          <p>Dashboard</p>
        </div>
        <div className="side-link">
          <PiStudent className="icon" />
          <p>Manage Student</p>
        </div>
        <div className="side-link">
          <GiTeacher className="icon" />
          <p>Manage Teacher</p>
        </div>
        <div className="side-link">
          <FaPeopleGroup className="icon" />
          <p>Attendance</p>
        </div>
        <div className="side-link">
          <IoIosTime className="icon" />
          <p>Timetable</p>
        </div>
        <div className="side-link">
          <FaPaperPlane className="icon" />
          <p>Notices</p>
        </div>
        <div className="side-link">
          <FaCalendarAlt className="icon" />
          <p>Academic Calendar</p>
        </div>
        <div className="side-link">
          <MdOutlineEmojiEvents className="icon" />
          <p>Events</p>
        </div>
        <div className="side-link">
          <FaWpforms className="icon" />
          <p>Forms</p>
        </div>
      </div>
      <button type="submit">Logout</button>
    </div>
  );
};

export default AdminSidebar;
