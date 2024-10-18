"use client";
import React from "react";
import "./manageStudent.css";
import { useState } from "react";

const ManageStudent = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    aadhar: "",
    branch: "",
    enrollmentNumber: "",
    twelfthSchoolName: "",
    tenthSchoolName: "",
    studentImageUrl: "",
    twelfthPercentage: "",
    tenthPercentage: "",
  });

  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const branches = ["BTECH", "BED", "BSC", "BALLB", "BAJMC"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    checkFormComplete();
  };

  const checkFormComplete = () => {
    const allFieldsFilled = Object.values(formData).every((value) => value !== "");
    setIsSubmitActive(allFieldsFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitActive) {
      // Process form data
      alert("Form submitted successfully!");
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      fatherName: "",
      motherName: "",
      dob: "",
      phone: "",
      email: "",
      address: "",
      aadhar: "",
      branch: "",
      enrollmentNumber: "",
      twelfthSchoolName: "",
      tenthSchoolName: "",
      studentImageUrl: "",
      twelfthPercentage: "",
      tenthPercentage: "",
    });
    setIsSubmitActive(false);
  };

  return (
    <div className="ManageStudent">
      <div className="tabContainer">
        <button className={activeTab === "add" ? "activeTab" : ""} onClick={() => setActiveTab("add")}>ADD</button>
        <button className={activeTab === "update" ? "activeTab" : ""} onClick={() => setActiveTab("update")}>UPDATE</button>
        <button className={activeTab === "remove" ? "activeTab" : ""} onClick={() => setActiveTab("remove")}>REMOVE</button>
      </div>

      {activeTab === "add" && (
        <form className="form">
          <div className="formGroup">
            <label>Enrollment Number</label>
            <input type="text" name="enrollmentNumber" value={formData.enrollmentNumber} onChange={handleInputChange} />
          </div>
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
            <label>Branch</label>
            <select name="branch" value={formData.branch} onChange={handleInputChange}>
              <option value="">Select Branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>{branch}</option>
              ))}
            </select>
          </div>
          <div className="formGroup">
            <label>Senior Secondary Schooling</label>
            <input type="text" name="twelfthSchoolName" value={formData.twelfthSchoolName} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Higher Secondary Schooling</label>
            <input type="text" name="tenthSchoolName" value={formData.tenthSchoolName} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Senior Secondary School Percentage</label>
            <input type="text" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Higher Secondary School Percentage</label>
            <input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label>Student Image URL</label>
            <input type="text" name="studentImageUrl" value={formData.studentImageUrl} onChange={handleInputChange} />
          </div>

          <button className="submitButton" type="submit" onClick={handleSubmit} disabled={!isSubmitActive}>Submit</button>
          <button className="clearButton" type="button" onClick={handleClear}>Clear</button>
        </form>
      )}

      {activeTab === "update" && (
        <form className="form">
          <div className="formGroup">
            <label>Enrollment Number</label>
            <input type="text" name="enrollmentNumber" value={formData.enrollmentNumber} onChange={handleInputChange} />
          </div>
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
            <label>Branch</label>
            <select name="branch" value={formData.branch} onChange={handleInputChange}>
              <option value="">Select Branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>{branch}</option>
              ))}
            </select>
          </div>

          <button className="submitButton" type="submit" onClick={handleSubmit} disabled={!isSubmitActive}>Update</button>
        </form>
      )}

      {activeTab === "remove" && (
        <form className="form">
          <div className="formGroup">
            <label>Enrollment Number</label>
            <input type="text" name="enrollmentNumber" value={formData.enrollmentNumber} onChange={handleInputChange} />
          </div>
          <button className="submitButton" type="submit" onClick={handleSubmit} disabled={!isSubmitActive}>Remove</button>
        </form>
      )}
    </div>
  );
};

export default ManageStudent;
