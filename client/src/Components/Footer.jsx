import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import Headword from "./Headword";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="test5" style={{ height: "0rem" }}>
      <div>
        <Headword name="Contact Me" />
        <div style={{ height: "4rem" }} className="contactme">
          <div className="contactlink">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tinu--kumar941/"
            >
              {" "}
              <LinkedInIcon style={{ fontSize: "3rem", color: "black" }} />{" "}
            </a>
          </div>

          <div style={{ padding: "0rem 1rem 0rem 1rem" }}></div>
          <div className="contactlink">
            <a target="_blank" href="https://github.com/Tinu01kumar">
              {" "}
              <GitHubIcon style={{ fontSize: "3rem", color: "black" }} />{" "}
            </a>
          </div>

          <div style={{ padding: "0rem 1rem 0rem 1rem" }}></div>

          <div className="contactlink">
            <a href="mailto:tinu01edu@gmail.com?Subject=Some%20subject">
            
              <MailIcon style={{ fontSize: "3rem", color: "black" }} />
            </a>
          </div>
        </div>
        <div
          style={{
            paddingBottom: "5rem",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "580",
          }}
        >
          ©2023,Tinu kumar
        </div>
      </div>
    </div>
  );
};

export default Footer;
