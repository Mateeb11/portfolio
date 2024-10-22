import classes from "./Experience.module.scss";
import MileStone from "./MileStone";

import SectionTitle from "../../UI/SectionTitle";

export default function Experience() {
  return (
    <section>
      <SectionTitle title="EXPERIENCE" smallMargin={true} />
      <ul className={classes.container}>
        <MileStone
          current={true}
          title="Elite Specialist | Tech GDP"
          company="Mobily · Full Time"
          time="06/2024 - Present"
          description={[
            "Rotation over Mobily tech departments",
            "Learn how each department operates",
            "Learn tech departments environment in telecommunication sector",
            "Contribute in day-to-day tasks",
          ]}
        ></MileStone>
        <MileStone
          title="Junior Software Engineer"
          company="WAKI · Full Time"
          time="11/2023 - 06/2024"
          description={[
            "Analyze requirements and provide clean and reliable technical solutions",
            "Work with UX/UI designers to transform designs into frontend code with Angular JS",
            "Work with back-end developers to integrate UI components with APIs and databases",
            "Write high-quality, scalable, and reusable code",
            "Write functional requirement documents and guides",
            "Debugging & Troubleshooting",
            "Continuously improve the user interface based on user feedback and testing",
            "Code refactoring",
          ]}
        ></MileStone>
        <MileStone
          title="Junior Software Developer | Misk Traineeship Program"
          company="WAKI · Internship"
          time="08/2023 - 11/2023"
          description={[
            "Fix responsiveness issues",
            "Debugging",
            "Troubleshooting and fixing frontend issues",
          ]}
        ></MileStone>
        <MileStone
          title="IOT and Software Development"
          company="Smart Methods · Internship"
          time="06/2022 - 08/2022"
          description={["Used Arduino", "Implemented web Text-to-Speech"]}
        ></MileStone>
      </ul>
    </section>
  );
}
