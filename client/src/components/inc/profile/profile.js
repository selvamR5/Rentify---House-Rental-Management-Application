import React, { useState } from "react";
import "./profile.css"

const AccountPage = () => {

  var userData = localStorage.getItem('userDetails');
  userData = JSON.parse(userData);

  const [email, setEmail] = useState(userData['user']['Email']);
  const [password, setPassword] = useState(userData['user']['Password']);
  const [firstName, setFirstName] = useState(userData['user']['FirstName']);
  const [lastName, setLastName] = useState(userData['user']['LastName']);
  const [mobile, setMobile] = useState(userData['user']['PhoneNumber']);

  const handleEmailChange = () => {
    document.getElementById("email-field").removeAttribute("disabled");
  };

  const handlePasswordChange = () => {
    document.getElementById("password-field").removeAttribute("disabled");
  };

  const handleSave = () => {
    
    // add logic to save changes to server or database
  };

  return (
    <div className="account-page-container">
      <div className="profile-photo-container">
        <img
          src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg"
          alt="Profile"
          className="profile-photo"
        />
      </div>
      <button
            className="btn-outline-secondary"
            onClick={()=>{}}
        >
            Change Photo
        </button>
      <div className="account-details-container">
        <div className="form-group">
          <label htmlFor="email-field">Email Address</label>
          <div className="input-group">
            <input
              type="email"
              id="email-field"
              className="form-control"
              value={email}
              disabled
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn-outline-secondary"
              onClick={handleEmailChange}
            >
              Change Email
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password-field">Password</label>
          <div className="input-group">
            <input
              type="password"
              id="password-field"
              className="form-control"
              value={password}
              disabled
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn-outline-secondary"
              onClick={handlePasswordChange}
            >
              Change Password
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="first-name-field">First Name</label>
          <input
            type="text"
            id="first-name-field"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name-field">Last Name</label>
          <input
            type="text"
            id="last-name-field"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile-field">Mobile Number</label>
          <input
            type="text"
            id="mobile-field"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button className="btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AccountPage;