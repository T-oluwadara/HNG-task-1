import React from "react";
import "./ContactUs.css";
import "./Profile.css";
import zurilogo from "../components/images/zuri.svg";
import iglogo from "../components/images/i4g.svg";

function ContactUs() {
  return (
    <div className="main">
      <h1 className="header2">Contact Me</h1>
      <p className="header-text">Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <div className="form-el">
          <div className="first_el">
            <label>First name</label>
            <input type="text" id="first_name" placeholder="Enter your first name" />
          </div>
          <div className="last_el">
            <label>Last name</label>
            <input type="text" id="last_name" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="mail">
          <label>Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>

        <div className="msg">
          <label>Message</label>
          <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." rows="8" />
        </div>

        <div className="checks">
          <input type="checkbox" />
          <label> You agree to providing your data to Victoria who may contact you.</label>
        </div>

        <button type="submit" id="btn__submit">
          Send message
        </button>
      </form>

      <div className="footer">
        <hr></hr>
        <div className="footer-logo">
          <img src={zurilogo} alt="zuri logo"></img>
          <p className="footer-text">HNG Internship 9 Frontend Task</p>
          <img src={iglogo} alt="ingressive for good logo"></img>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
