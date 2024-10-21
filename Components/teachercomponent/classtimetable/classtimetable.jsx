"use client"
import React from "react";
import "./classtimetable.css"

const classschedule = () => {
  return (
    <div className="classSchedule">
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
  )
}

export default classschedule
