import classes from "./MainSection.module.scss";

import Skills from "./Skills/Skills";

import UnderLine from "../../UI/Underline";
import Button from "../../UI/Button";

import reactLogo from "../../assets/react.svg";

export default function MainSection() {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <img
          src={reactLogo}
          alt="React logo rotating 360 degree all the time"
        />
        <h1>
          Welcome to my page, I’m <UnderLine>Mateeb Alharbi</UnderLine>
        </h1>
        <p className={classes.info}>
          A front end web developer using <span>React JS</span>, passionate
          about building responsive and modern websites.
        </p>
        <Button href="#contact">CONTACT ME</Button>
      </div>
      <Skills></Skills>
    </section>
  );
}
