"use client"
import { useState } from 'react';
import "./markattendance.css"
import { FaRegUserCircle } from "react-icons/fa";

const MarkAttendance = () => {
  const courses = {
    BTECH: {
      branches: ['CSE', 'ECE'],
      semesters: [...Array(10).keys()].map(num => num + 1),
      subjects: {
        CSE: ['DSA', 'OS', 'DBMS'],
        ECE: ['Circuit Theory', 'Analog Communication']
      }
    },
    BED: {
      branches: ['Science', 'Arts'],
      semesters: [...Array(4).keys()].map(num => num + 1),
      subjects: {
        Science: ['Pedagogy of Science', 'Child Development'],
        Arts: ['History of Education', 'Philosophy of Education']
      }
    },
    BALLB: {
      branches: ['Law'],
      semesters: [...Array(5).keys()].map(num => num + 1),
      subjects: {
        Law: ['Criminal Law', 'Constitutional Law']
      }
    },
    BAJMC: {
      branches: ['Journalism'],
      semesters: [...Array(6).keys()].map(num => num + 1),
      subjects: {
        Journalism: ['Media Ethics', 'Photojournalism']
      }
    }
  };

  const sections = ['A', 'B', 'C'];

  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const students = [
    { id: '1001', name: 'John Doe', image: '../../Assets/user.png' },
    { id: '1002', name: 'Jane Smith', image: '../../Assets/user.png' },
    { id: '1003', name: 'Mark Johnson', image: '../../Assets/user.png' },
    { id: '1001', name: 'John Doe', image: '../../Assets/user.png' },
    { id: '1002', name: 'Jane Smith', image: '../../Assets/user.png' },
    { id: '1003', name: 'Mark Johnson', image: '../../Assets/user.png' }
  ];

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedBranch('');
    setSelectedSemester('');
    setSelectedSubject('');
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
    setSelectedSemester('');
    setSelectedSubject('');
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject('');
  };

  return (
    <div className="mark-attendance-container">
      {/* Dropdown fields for course, branch, semester, section, and subject */}
      <div className="fields">
        <div className="field">
          <label>Course</label>
          <select value={selectedCourse} onChange={handleCourseChange}>
            <option value="">Select Course</option>
            {Object.keys(courses).map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        {selectedCourse && (
          <div className="field">
            <label>Branch</label>
            <select value={selectedBranch} onChange={handleBranchChange}>
              <option value="">Select Branch</option>
              {courses[selectedCourse].branches.map(branch => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
          </div>
        )}

        {selectedBranch && (
          <div className="field">
            <label>Semester</label>
            <select value={selectedSemester} onChange={handleSemesterChange}>
              <option value="">Select Semester</option>
              {courses[selectedCourse].semesters.map(sem => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
          </div>
        )}

        <div className="field">
          <label>Section</label>
          <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
            <option value="">Select Section</option>
            {sections.map(section => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>
        </div>

        {selectedBranch && selectedSemester && (
          <div className="field">
            <label>Subject</label>
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="">Select Subject</option>
              {courses[selectedCourse].subjects[selectedBranch].map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Attendance table */}
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Enrollment ID</th>
            <th>Name</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>
                {/* <img src={student.image} alt="student" className="student-image" /> */}
                <FaRegUserCircle className="student-image" />
              </td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <button className="present-btn">Present</button>
              </td>
              <td>
                <button className="absent-btn">Absent</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarkAttendance;
