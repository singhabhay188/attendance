"use client";
import React, { useState } from "react";
import "./manageTeacher.css";

const ManageTeacher = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    qualification: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    aadhar: "",
    branch: "",
    numSubjects: 1,
    subjects: [],
    empId: "",
    experience: "",
    teacherImageUrl: "", // New field for teacher image URL
  });

  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const branches = ["BTECH", "BED", "BSC", "BALLB", "BAJMC"];
  const subjectsPerBranch = {
    BTECH: ["Math", "Physics", "CS"],
    BED: ["Pedagogy", "Education Psychology"],
    // Add other branches and their subjects here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    checkFormComplete();
  };

  const handleSubjectChange = (e, index) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index] = e.target.value;
    setFormData({ ...formData, subjects: updatedSubjects });
    checkFormComplete();
  };

  const checkFormComplete = () => {
    const {
      name,
      fatherName,
      motherName,
      qualification,
      dob,
      phone,
      email,
      address,
      aadhar,
      branch,
      numSubjects,
      subjects,
      teacherImageUrl, // Added this to form validation
    } = formData;

    const allFieldsFilled =
      [
        name,
        fatherName,
        motherName,
        qualification,
        dob,
        phone,
        email,
        address,
        aadhar,
        branch,
        numSubjects,
        teacherImageUrl, // Check if the image URL is provided
      ].every((value) => value !== "") &&
      subjects.length === parseInt(numSubjects) &&
      subjects.every((subject) => subject !== "");

    setIsSubmitActive(allFieldsFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitActive) {
      alert("Form submitted successfully!");
      handleClear(); // Clear the form after submission
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      fatherName: "",
      motherName: "",
      qualification: "",
      dob: "",
      phone: "",
      email: "",
      address: "",
      aadhar: "",
      branch: "",
      numSubjects: 1,
      subjects: [],
      empId: "",
      experience: "",
      teacherImageUrl: "", // Clear the teacher image URL
    });
    setIsSubmitActive(false);
  };

  return (
    <div className="ManageTeacher">
      <div className="tabContainer">
        <button className={activeTab === "add" ? "activeTab" : ""} onClick={() => setActiveTab("add")}>
          ADD
        </button>
        <button className={activeTab === "update" ? "activeTab" : ""} onClick={() => setActiveTab("update")}>
          UPDATE
        </button>
        <button className={activeTab === "remove" ? "activeTab" : ""} onClick={() => setActiveTab("remove")}>
          REMOVE
        </button>
      </div>

      {/* ADD TAB */}
      {activeTab === "add" && (
        <form className="form">
          <div className="formGroup">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Father's Name</label>
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Mother's Name</label>
            <input type="text" name="motherName" value={formData.motherName} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Education Qualification</label>
            <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Email ID</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Residence Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Aadhar Card Number</label>
            <input type="text" name="aadhar" value={formData.aadhar} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Year of Experience</label>
            <input type="number" name="experience" value={formData.experience} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Branch</label>
            <select name="branch" value={formData.branch} onChange={handleInputChange}>
              <option value="">Select Branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          <div className="formGroup">
            <label>Number of Subjects</label>
            <input
              type="number"
              name="numSubjects"
              value={formData.numSubjects}
              onChange={handleInputChange}
              min="1"
              max="5"
            />
          </div>
          <div className="formGroup">
            <label>Subjects</label>
            {Array.from({ length: formData.numSubjects }).map((_, index) => (
              <select key={index} value={formData.subjects[index] || ""} onChange={(e) => handleSubjectChange(e, index)}>
                <option value="">Select Subject</option>
                {formData.branch &&
                  subjectsPerBranch[formData.branch]?.map((subject, idx) => (
                    <option key={idx} value={subject}>
                      {subject}
                    </option>
                  ))}
              </select>
            ))}
          </div>
          <div className="formGroup">
            <label>Teacher Image URL</label>
            <input type="text" name="teacherImageUrl" value={formData.teacherImageUrl} onChange={handleInputChange} />
          </div>

          <button className="submitButton" type="submit" onClick={handleSubmit} disabled={!isSubmitActive}>
            Submit
          </button>
          <button className="clearButton" type="button" onClick={handleClear}>
            Clear
          </button>
        </form>
      )}

      {/* UPDATE TAB */}
      {activeTab === "update" && (
        <form className="form">
          <div className="formGroup">
            <label>Employee ID</label>
            <input type="text" name="empId" value={formData.empId} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Education Qualification</label>
            <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Email ID</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Residence Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Year of Experience</label>
            <input type="number" name="experience" value={formData.experience} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Father's Name</label>
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Mother's Name</label>
            <input type="text" name="motherName" value={formData.motherName} onChange={handleInputChange} />
          </div>

          <button className="submitButton" type="submit" onClick={handleSubmit}>
            Update
          </button>
          <button className="clearButton" type="button" onClick={handleClear}>
            Clear
          </button>
        </form>
      )}

      {/* REMOVE TAB */}
      {activeTab === "remove" && (
        <form className="form">
          <div className="formGroup">
            <label>Employee ID</label>
            <input type="text" name="empId" value={formData.empId} onChange={handleInputChange} />
          </div>
          <button className="submitButton" type="submit" onClick={handleSubmit}>
            Remove
          </button>
          <button className="clearButton" type="button" onClick={handleClear}>
            Clear
          </button>
        </form>
      )}
    </div>
  );
};

export default ManageTeacher;

