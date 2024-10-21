import classes from "./Experience.module.scss";

import SectionTitle from "../../UI/SectionTitle";

import whiteCircle from "../../assets/circle-white.svg";

export default function Experience() {
  return (
    <section>
      <SectionTitle title="EXPERIENCE" smallMargin={true} />
      <div className={classes.container}>
        <div className={classes.experience}>
          <span>Elite Specialist | Tech GDP</span>
          <span className={classes.small}>Mobily · Full Time</span>
          <span className={classes.small}>06/2024 - Present</span>
        </div>
        <div className={classes.experience}>
          <span>Junior Software Engineer</span>
          <span className={classes.small}>WAKI · Full Time</span>
          <span className={classes.small}>11/2023 - 06/2024</span>
        </div>
        <div className={classes.experience}>
          <span>Junior Software Developer | Misk Traineeship Program</span>
          <span className={classes.small}>WAKI · Internship</span>
          <span className={classes.small}>08/2023 - 11/2023</span>
        </div>
        <div className={classes.experience}>
          <span>IOT and Software Development</span>
          <span className={classes.small}>Smart Methods · Internship</span>
          <span className={classes.small}>06/2022 - 08/2022</span>
        </div>
      </div>
    </section>
  );
}
