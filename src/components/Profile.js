import React from "react";
import "./Profile.css";
import sharebtn from "../components/images/sharebtn.svg";
import profile from "../components/images/tofs.jpg";
import slacklogo from "../components/images/slack.svg";
import githublogo from "../components/images/github.svg";
import zurilogo from "../components/images/zuri.svg";
import iglogo from "../components/images/i4g.svg";

function Profile() {
  return (
    <div className="body">
      <img src={sharebtn} alt="share button" className="share-img"></img>
      <div className="header">
        <img src={profile} alt="header" id="profile__img"></img>
        <h2 className="profile-name">Oluwadara Victoria</h2>
      </div>

      <div className="link-container">
        <div className="link-btns">
          <a href="https://twitter.com/tohfunmii" id="twitter">
            @tohfunmii
          </a>
        </div>

        <div>
          <a href="" id="slack">
            @tofs
          </a>
        </div>

        <div className="link-btns">
          <a href="https://training.zuri.team/" id="btn__zuri">
            Zuri Team
          </a>
        </div>

        <div className="link-btns">
          <a href="https://books.zuri.team/" id="books" title="This is where you find books about design and coding">
            Zuri Books
          </a>
        </div>

        <div className="link-btns">
          <a href="https://books.zuri.team/python-for-beginners?ref_id=%3Ctofs%3E" id="book__python">
            Python Books
          </a>
        </div>

        <div className="link-btns">
          <a href="https://background.zuri.team/" id="pitch">
            Background Check for Coders
          </a>
        </div>

        <div className="link-btns">
          <a href="https://books.zuri.team/design-rules" id="book__design">
            Design Books
          </a>
        </div>
      </div>

      <div className="social-icons">
        <a href="">
          <img src={slacklogo} alt="slack logo"></img>
        </a>
        <a href="">
          <img src={githublogo} alt="github logo"></img>
        </a>
      </div>

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

export default Profile;
