import classes from "./Portfolio.module.scss";

import SectionTitle from "../../UI/SectionTitle";
import Project from "./Project";

import multiStepForm from "../../assets/projects/Multi-step form/mobile.png";
export default function Portfolio() {
  return (
    <section>
      <SectionTitle title="PORTFOLIO" />
      <div className={classes.container}>
        <Project
          image={multiStepForm}
          title="Multi-step from"
          skills="React JS, Sass"
          website="https://aback-icicle.surge.sh/"
          code="https://github.com/Mateeb11/multi-step-form"
        />
      </div>
    </section>
  );
}
