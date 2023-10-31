import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import classes from "./Social.module.scss";

import logo from "../assets/logo.svg";

export default function Social() {
  return (
    <div className={classes.container} id="header">
      <img
        src={logo}
        alt="The website logo"
        className={classes.logo}
        onClick={() => {
          location.href = "#header";
        }}
      />
      <div className={classes.social}>
        <a href="https://www.linkedin.com/in/mateeb-alharbi/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`${classes.icon}`}
            size="2x"
          />
        </a>
        <a href="https://github.com/Mateeb11">
          <FontAwesomeIcon
            icon={faGithub}
            className={`${classes.icon}`}
            size="2x"
          />
        </a>
      </div>
    </div>
  );
}
