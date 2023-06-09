import classes from "./Portfolio.module.scss";

import SectionTitle from "../../UI/SectionTitle";
import Project from "./Project";

import multiStepForm from "../../assets/projects/Multi-step form/mobile.png";
import easybank from "../../assets/projects/EasyBank landing page/mobile.png";
import restCoutries from "../../assets/projects/REST Countries API with color theme switcher/mobile.png";
import eCommerce from "../../assets/projects/E-commerce product page/mobile.png";

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
        <Project
          image={easybank}
          title="EasyBank landing page"
          skills="React JS, Sass"
          website="https://gifted-selection.surge.sh/"
          code="https://github.com/Mateeb11/easybank-landing-page-master"
        />
        <Project
          image={restCoutries}
          title="REST Countries API with color theme switcher"
          skills="React JS, React-Router-DOM, Redux-Toolkit, CSS, JavaScript"
          website="https://humdrum-smell.surge.sh/"
          code="https://github.com/Mateeb11/rest-countries-api-with-color-theme-switcher-master"
        />
        <Project
          image={eCommerce}
          title="E-commerce product page"
          skills="React JS, CSS"
          website="https://present-hook.surge.sh/"
          code="https://github.com/Mateeb11/ecommerce-product-page"
        />
      </div>
    </section>
  );
}
