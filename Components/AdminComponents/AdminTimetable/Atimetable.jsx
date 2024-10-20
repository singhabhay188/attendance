"use client"
import React from "react";
import { useState, useEffect } from "react";
import './ATimetable.css'


export default function Atimetable(){
  const branches = ["BTECH", "BED", "BALLB", "BAJMC"];
  const semesters = {
    BTECH: [1, 2, 3, 4, 5, 6, 7, 8],
    BED: [1, 2, 3, 4],
    BALLB: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    BAJMC: [1, 2, 3, 4, 5, 6]
  };
  const sections = ["A", "B", "C"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeSlots = ["09:10 to 10:05", "10:05 to 11:00", "11:15 to 12:10", "12:10 to 13:05", "13:35 to 14:30", "14:30 to 15:25", "15:25 to 16:20"];
  const teachers = {
    BTECH: { "John Doe": ["Math", "Physics"], "Jane Smith": ["Chemistry", "Biology"], "David Johnson": ["Computer Science"] },
    BED: { "Emily Davis": ["Psychology", "Education"], "Michael Brown": ["English", "History"], "Sophia Wilson": ["Math"] },
    BALLB: { "William Lee": ["Law", "Political Science"], "Olivia Martin": ["Economics", "Criminal Law"], "James King": ["International Relations"] },
    BAJMC: { "Ella White": ["Journalism", "Communication"], "Daniel Walker": ["Advertising", "Public Relations"], "Emma Harris": ["Media Studies"] }
  };

  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [teacher, setTeacher] = useState("");
  const [subject, setSubject] = useState("");
  const [availableSubjects, setAvailableSubjects] = useState([]);

  // Update the available subjects when the teacher is selected
  useEffect(() => {
    if (branch && teacher) {
      setAvailableSubjects(teachers[branch][teacher] || []);
    } else {
      setAvailableSubjects([]);
    }
  }, [branch, teacher]);

  const handleSubmit = () => {
    // Add your API call to submit the form data
    console.log("Submit Data", { branch, semester, section, day, time, teacher, subject });
  };

  const clearForm = () => {
    setBranch("");
    setSemester("");
    setSection("");
    setDay("");
    setTime("");
    setTeacher("");
    setSubject("");
  };

  return (
    <div className="AdminTimetable">
      <div className="timetable">
        {/* <h1>Timetable</h1> */}
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="">Select Branch</option>
          {branches.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          disabled={!branch}
        >
          <option value="">Select Semester</option>
          {branch && semesters[branch].map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>

        <select value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="">Select Section</option>
          {sections.map((sec) => (
            <option key={sec} value={sec}>
              {sec}
            </option>
          ))}
        </select>

        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Select Day</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">Select Time Slot</option>
          {timeSlots.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          disabled={!branch}
        >
          <option value="">Select Teacher</option>
          {branch && Object.keys(teachers[branch]).map((teach) => (
            <option key={teach} value={teach}>
              {teach}
            </option>
          ))}
        </select>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={!teacher}
        >
          <option value="">Select Subject</option>
          {availableSubjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>

        <button onClick={clearForm}>Clear</button>
        <button
          onClick={handleSubmit}
          disabled={!branch || !semester || !section || !day || !time || !teacher || !subject}
        >
          Submit
        </button>
        
      </div>
    </div>
  );
};

