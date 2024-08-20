import React from "react";
import "./Footer.css";
import fb from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import igs from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>For small test</h4>
            <a href="/member">
              <p>Member</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource Center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Partner</h4>
            <a href="https://amazingtech.vn/">
              <p>Amazing Tech</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Company</h4>
            <a href="https://amazingtech.vn/about-us">
              <p>About</p>
            </a>
            <a href="https://amazingtech.vn/career">
              <p>Career</p>
            </a>
            <a href="https://amazingtech.vn/contact-us">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="Facebook" />
              </p>
              <p>
                <img src={twitter} alt="Twitter" />
              </p>
              <p>
                <img src={github} alt="GitHub" />
              </p>
              <p>
                <img src={igs} alt="Instagram" />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <p>Term & Conditions</p>
            </a>
            <a href="/privacy">
              <p>Privacy</p>
            </a>
            <a href="/security">
              <p>Security</p>
            </a>
            <a href="/cookie">
              <p>Cookie Declaration</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
