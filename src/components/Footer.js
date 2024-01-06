import React from "react";
import facebook from "./images/fb.png";
import linkedin from "./images/Linkedin.png";
import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <>
      <footer className="address">
        <section className="footer-section">
          <span>
            <p>+91 120 421 7213</p>
            <a href="mailto: sales@keenable.in">sales@keenable.in</a>
            <p>B149, Ground Floor, Sector 63, Noida, India - 201301</p>
            {/* <p>
              1st Floor, SCO M37, Old DLF Colony, Sector 14, Gurugram, India -
              122003
            </p> */}
          </span>
          <div className="subfooter">
            <span>©2021 by Keen and Able Computers Pvt. Ltd.</span>

            <div className="social">
              <Link to="https://www.linkedin.com/company/keenable" target="_blank">
              <img className="linkedin" src={linkedin} alt="linkedin" /></Link>
              
              <Link to="https://www.facebook.com/Alwaysbeenopen/" target="_blank"><img src={facebook} alt="facebook" /></Link>
            </div>

            <Link
              className="hover-link"
              target="_blank"
      
              to="https://www.google.com/maps/place/Keen+%26+Able+Computers+Private+Limited/@28.4744487,77.0643093,13.22z/data=!4m12!1m6!3m5!1s0x0:0x6ba1761cdbb94adb!2sKeen+%26+Able+Computers+Private+Limited!8m2!3d28.4703848!4d77.0449082!3m4!1s0x390d19b2a09d5cc9:0x6ba1761cdbb94adb!8m2!3d28.4703848!4d77.0449082">
              <LocationOnIcon></LocationOnIcon>
            </Link>

            <span>
              {/* <p className="trademarks">All Trademarks and Logos used throughout the site are property of their respective owners</p>
                    <p className="trademarks">All images used on the website have been used courtesy Pixabay.com</p> */}
              <p>Designed By Pushpender</p>
            </span>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
