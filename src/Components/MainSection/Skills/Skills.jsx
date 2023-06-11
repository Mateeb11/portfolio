import classes from "./Skills.module.scss";

import Skill from "./Skill";

export default function Skills() {
  return (
    <div className={classes.container}>
      <div className={classes.line}></div>

      <ul className={classes.list}>
        <Skill skill="HTML" level="Expert" />
        <Skill skill="CSS" level="Expert" />
        <Skill skill="JavaScript" level="Expert" />
        <Skill skill="React JS" level="Expert" />
        <Skill skill="Sass" level="Advanced" />
        <Skill skill="Redux-Toolkit" level="Intermediate" />
      </ul>
    </div>
  );
}
