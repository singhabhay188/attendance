"use client";
import React from "react";
import classSchedule from "../../../Components/teachercomponent/classtimetable/classtimetable";

const page = () => {
  return (
    <div className="TTSchedule">
      <table className="class-schedule-short">
        <thead>
          <tr>
            <th>Branch</th>
            <th>Section</th>
            <th>Time Slot</th>
            <th>Subject</th>
            <th>Room Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Btech</td>
            <td>A</td>
            <td>09:10 to 10:05</td>
            <td>DSA</td>
            <td>AB-112</td>
          </tr>
          <tr>
            <td>Btech</td>
            <td>A</td>
            <td>09:10 to 10:05</td>
            <td>DSA</td>
            <td>AB-112</td>
          </tr>
          <tr>
            <td>Btech</td>
            <td>A</td>
            <td>09:10 to 10:05</td>
            <td>DSA</td>
            <td>AB-112</td>
          </tr>
          <tr>
            <td>Btech</td>
            <td>A</td>
            <td>09:10 to 10:05</td>
            <td>DSA</td>
            <td>AB-112</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
