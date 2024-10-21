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
import { usePathname } from "next/navigation";
import Link from "next/link";

const TCSidebar = () => {
  const pathname = usePathname();
  let needed = pathname.split("/")[2];
  return (
    <div className="sidebar-TC">
      <div className="shortcut-links">
        <Link href="/teacher/dashboard" className={`side-link ${needed === "dashboard" ? "active-link" : ""}`}>
          <MdDashboard className="icon" />
          <p>Dashboard</p>
        </Link>
        <Link href="/teacher/classTime" className={`side-link ${needed === "classTime" ? "active-link" : ""}`}>
          <PiStudent className="icon" />
          <p>Class Schedules</p>
        </Link>
        <Link href="/teacher/enrolledStudents" className={`side-link ${needed === "enrolledStudents" ? "active-link" : ""}`}>
          <FaPeopleGroup className="icon" />
          <p>Enrolled Students</p>
        </Link>
        <Link href="/teacher/markAttendance" className={`side-link ${needed === "markAttendance" ? "active-link" : ""}`}>
          <GiTeacher className="icon" />
          <p>Mark Attendance</p>
        </Link>
        <Link href="/teacher/manageAssignment" className={`side-link ${needed === "manageAssignment" ? "active-link" : ""}`}>
          <MdOutlineAssignment className="icon" />
          <p>Manage Assignement</p>
        </Link>
        <Link href="/teacher/notices" className={`side-link ${needed === "notices" ? "active-link" : ""}`}>
          <FaPaperPlane className="icon" />
          <p>Notices</p>
        </Link>
        <Link href="/teacher/calendar" className={`side-link ${needed === "calendar" ? "active-link" : ""}`}>
          <FaCalendarAlt className="icon" />
          <p>Academic Calendar</p>
        </Link>
        <Link href="/teacher/events" className={`side-link ${needed === "events" ? "active-link" : ""}`}>
          <MdOutlineEmojiEvents className="icon" />
          <p>Events</p>
        </Link>
      </div>
      <button type="submit">Logout</button>
    </div>
  );
};

export default TCSidebar;
