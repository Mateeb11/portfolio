import { LazyLoadImage } from "react-lazy-load-image-component";

import classes from "./Project.module.scss";

import Button from "../../UI/Button";

export default function Project({ title, skills, image, code, website, alt }) {
  return (
    <div className={classes.project}>
      <div className={classes.imageContainer}>
        <LazyLoadImage src={image} alt={alt}></LazyLoadImage>
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
