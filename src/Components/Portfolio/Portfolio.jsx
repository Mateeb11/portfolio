import { useMediaQuery } from "react-responsive";

import classes from "./Portfolio.module.scss";

import SectionTitle from "../../UI/SectionTitle";
import Project from "./Project";

import multiStepFormMobile from "../../assets/projects/Multi-step form/mobile.png";
import easybankMobile from "../../assets/projects/EasyBank landing page/mobile.png";
import restCoutriesMobile from "../../assets/projects/REST Countries API with color theme switcher/mobile.png";
import eCommerceMobile from "../../assets/projects/E-commerce product page/mobile.png";

import multiStepFormDesktop from "../../assets/projects/Multi-step form/desktop.png";
import easybankDesktop from "../../assets/projects/EasyBank landing page/desktop.png";
import restCoutriesDesktop from "../../assets/projects/REST Countries API with color theme switcher/desktop.png";
import eCommerceDesktop from "../../assets/projects/E-commerce product page/desktop.png";

export default function Portfolio() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <section>
      <SectionTitle title="PORTFOLIO" />
      <div className={classes.container}>
        <Project
          image={isBigScreen ? multiStepFormDesktop : multiStepFormMobile}
          title="Multi-step from"
          skills="React JS, Sass"
          website="https://aback-icicle.surge.sh/"
          code="https://github.com/Mateeb11/multi-step-form"
        />
        <Project
          image={isBigScreen ? easybankDesktop : easybankMobile}
          title="EasyBank landing page"
          skills="React JS, Sass"
          website="https://gifted-selection.surge.sh/"
          code="https://github.com/Mateeb11/easybank-landing-page-master"
        />
        <Project
          image={isBigScreen ? restCoutriesDesktop : restCoutriesMobile}
          title="REST Countries API with color theme switcher"
          skills="React JS, React-Router-DOM, Redux-Toolkit, CSS, JavaScript"
          website="https://humdrum-smell.surge.sh/"
          code="https://github.com/Mateeb11/rest-countries-api-with-color-theme-switcher-master"
        />
        <Project
          image={isBigScreen ? eCommerceDesktop : eCommerceMobile}
          title="E-commerce product page"
          skills="React JS, CSS"
          website="https://present-hook.surge.sh/"
          code="https://github.com/Mateeb11/ecommerce-product-page"
        />
      </div>
    </section>
  );
}
