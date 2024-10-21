"use client";
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
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();
  let needed = pathname.split("/")[2];

  return (
    <div className="sidebar-admin">
      {/* <h1>Admin Panel</h1> */}
      <div className="shortcut-links">
        <Link
          href="/admin/dashboard"
          className={`side-link ${needed === "dashboard" ? "active-link" : ""}`}
        >
          <MdDashboard className="icon" />
          <p>Dashboard</p>
        </Link>
        <Link
          href="/admin/manageStudent"
          className={`side-link ${
            needed === "manageStudent" ? "active-link" : ""
          }`}
        >
          <PiStudent className="icon" />
          <p>Manage Student</p>
        </Link>
        <Link
          href="/admin/manageTeacher"
          className={`side-link ${
            needed === "manageTeacher" ? "active-link" : ""
          }`}
        >
          <GiTeacher className="icon" />
          <p>Manage Teacher</p>
        </Link>
        <Link
          href="/admin/manageAttendance"
          className={`side-link ${
            needed === "manageAttendance" ? "active-link" : ""
          }`}
        >
          <FaPeopleGroup className="icon" />
          <p>Attendance</p>
        </Link>
        <Link
          href="/admin/manageTimetable"
          className={`side-link ${
            needed === "manageTimetable" ? "active-link" : ""
          }`}
        >
          <IoIosTime className="icon" />
          <p>Timetable</p>
        </Link>
        <Link
          href="/admin/manageNotices"
          className={`side-link ${
            needed === "manageNotices" ? "active-link" : ""
          }`}
        >
          <FaPaperPlane className="icon" />
          <p>Notices</p>
        </Link>
        <Link
          href="/admin/calendar"
          className={`side-link ${
            needed === "calendar" ? "active-link" : ""
          }`}
        >
          <FaCalendarAlt className="icon" />
          <p>Academic Calendar</p>
        </Link>
        <Link
          href="/admin/manageEvents"
          className={`side-link ${
            needed === "manageEvents" ? "active-link" : ""
          }`}
        >
          <MdOutlineEmojiEvents className="icon" />
          <p>Events</p>
        </Link>
        <Link
          href="/admin/manageForms"
          className={`side-link ${
            needed === "manageForms" ? "active-link" : ""
          }`}
        >
          <FaWpforms className="icon" />
          <p>Forms</p>
        </Link>
      </div>
      <button type="submit">Logout</button>
    </div>
  );
};

export default AdminSidebar;
