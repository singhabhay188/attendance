"use client"
import React from "react";
import "./tcSidebar.css";
import { MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";

const SCSidebar = () => {
  return (
    <div className="sidebar-TC">
      <div className="shortcut-links">
        <div className="side-link">
          <MdDashboard className="icon" />
          <p>Dashboard</p>
        </div>
        <div className="side-link">
          <PiStudent className="icon" />
          <p>Class Schedules</p>
        </div>
        <div className="side-link">
          <FaPeopleGroup className="icon" />
          <p>Enrolled Students</p>
        </div>
        <div className="side-link">
          <GiTeacher className="icon" />
          <p>Mark Attendance</p>
        </div>
        <div className="side-link">
          <MdOutlineAssignment className="icon" />
          <p>Manage Assignement</p>
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
      </div>
      <button type="submit">Logout</button>
    </div>
  );
};

export default AdminSidebar;
