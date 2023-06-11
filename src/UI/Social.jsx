import classes from "./Social.module.scss";

import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

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
          <img src={linkedin} alt="LinkedIn logo and a link to my page" />
        </a>
        <a href="https://github.com/Mateeb11">
          <img src={github} alt="GitHub logo and a link to my page" />
        </a>
      </div>
    </div>
  );
}
