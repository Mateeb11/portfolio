import classes from "./Project.module.scss";

import Button from "../../UI/Button";

export default function Project({ title, skills, image, code, website }) {
  return (
    <div className={classes.project}>
      <div className={classes.imageContainer}>
        <img src={image}></img>
      </div>

      <div className={classes.projectInfo}>
        <p>{title}</p>
        <span>{skills}</span>
      </div>

      <div className={classes.buttons}>
        <Button href={website} target="_blank">
          WEBSITE
        </Button>
        <Button href={code} target="_blank">
          CODE
        </Button>
      </div>
    </div>
  );
}
