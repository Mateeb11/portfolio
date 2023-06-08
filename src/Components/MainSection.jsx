import classes from "./MainSection.module.scss";

import reactLogo from "../assets/react.svg";

export default function MainSection() {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <img src={reactLogo} alt="" />
        <h1>Welcome to my page, I’m Mateeb Alharbi</h1>
      </div>
    </section>
  );
}
