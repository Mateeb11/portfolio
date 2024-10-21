import classes from "./Experience.module.scss";
import MileStone from "./MileStone";

import SectionTitle from "../../UI/SectionTitle";

export default function Experience() {
  return (
    <section>
      <SectionTitle title="EXPERIENCE" smallMargin={true} />
      <ul className={classes.container}>
        <MileStone
          title="Elite Specialist | Tech GDP"
          company="Mobily · Full Time"
          time="06/2024 - Present"
          current={true}
        ></MileStone>
        <MileStone
          title="Junior Software Engineer"
          company="WAKI · Full Time"
          time="11/2023 - 06/2024"
        ></MileStone>
        <MileStone
          title="Junior Software Developer | Misk Traineeship Program"
          company="WAKI · Internship"
          time="08/2023 - 11/2023"
          description={[
            "Fix responsiveness issues",
            "Debugging",
            "Add new features",
            "Refactor the code for old pages",
            "Suggest new ideas and how to do it",
          ]}
        ></MileStone>
        <MileStone
          title="IOT and Software Development"
          company="Smart Methods · Internship"
          time="06/2022 - 08/2022"
        ></MileStone>
      </ul>
    </section>
  );
}
