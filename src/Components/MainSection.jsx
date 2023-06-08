import classes from "./MainSection.module.scss";

import UnderLine from "../UI/Underline";

import reactLogo from "../assets/react.svg";

export default function MainSection() {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <img src={reactLogo} alt="" />
        <h1>
          Welcome to my page, I’m <UnderLine>Mateeb Alharbi</UnderLine>
        </h1>
        <p className={classes.info}>
          A front end web developer using <span>React JS</span>, passionate
          about building responsive and modern websites.
        </p>
      </div>
    </section>
  );
}
