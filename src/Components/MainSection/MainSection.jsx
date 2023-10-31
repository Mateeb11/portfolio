import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./MainSection.module.scss";

import Skills from "./Skills/Skills";

import UnderLine from "../../UI/Underline";
import Button from "../../UI/Button";

import picture from "../../assets/Picture.png";

export default function MainSection() {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <div className={classes.picture}>
          <img src={picture} alt="A picture of me smiling" />
          <FontAwesomeIcon
            icon={faReact}
            className={`${classes.icon} ${classes.reactIcon}`}
            size="2x"
          />
          <FontAwesomeIcon
            icon={faAngular}
            className={`${classes.icon} ${classes.angularIcon}`}
            size="2x"
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            className={`${classes.icon} ${classes.jsIcon}`}
            size="2x"
          />
        </div>
        <div className={classes.info}>
          <h1>
            Welcome to my page, I’m <UnderLine>Mateeb Alharbi</UnderLine>
          </h1>
          <p className={classes.summary}>
            A front end web developer using <span>React JS</span>, passionate
            about building responsive and modern websites.
          </p>
          <Button href="#contact">CONTACT ME</Button>
        </div>
      </div>
      <Skills></Skills>
    </section>
  );
}
