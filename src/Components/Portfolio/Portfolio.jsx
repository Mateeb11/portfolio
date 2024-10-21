import { useMediaQuery } from "react-responsive";

import classes from "./Portfolio.module.scss";

import SectionTitle from "../../UI/SectionTitle";
import Project from "./Project";

import multiStepFormMobile from "../../assets/projects/Multi-step form/mobile.png";
import easybankMobile from "../../assets/projects/EasyBank landing page/mobile.png";
import restCoutriesMobile from "../../assets/projects/REST Countries API with color theme switcher/mobile.png";
import eCommerceMobile from "../../assets/projects/E-commerce product page/mobile.png";
import countdownMobile from "../../assets/projects/Launch Countdown Timer/mobile.png";
import gpaMobile from "../../assets/projects/GPA Calculator/mobile.png";

import multiStepFormDesktop from "../../assets/projects/Multi-step form/desktop.png";
import easybankDesktop from "../../assets/projects/EasyBank landing page/desktop.png";
import restCoutriesDesktop from "../../assets/projects/REST Countries API with color theme switcher/desktop.png";
import eCommerceDesktop from "../../assets/projects/E-commerce product page/desktop.png";
import countdownDesktop from "../../assets/projects/Launch Countdown Timer/desktop.png";
import gpaDesktop from "../../assets/projects/GPA Calculator/desktop.png";

export default function Portfolio() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <section>
      <SectionTitle title="PORTFOLIO" smallMargin={true} />
      <div className={classes.container}>
        <Project
          image={isBigScreen ? multiStepFormDesktop : multiStepFormMobile}
          alt="The main page of the website"
          title="Multi-step from"
          skills="React JS, Sass, JavaScript"
          website="https://aback-icicle.surge.sh/"
          code="https://github.com/Mateeb11/multi-step-form"
        />
        <Project
          image={isBigScreen ? easybankDesktop : easybankMobile}
          alt="The main page of the website"
          title="EasyBank landing page"
          skills="React JS, Sass"
          website="https://gifted-selection.surge.sh/"
          code="https://github.com/Mateeb11/easybank-landing-page-master"
        />
        <Project
          image={isBigScreen ? restCoutriesDesktop : restCoutriesMobile}
          alt="The main page of the website"
          title="REST Countries API with color theme switcher"
          skills="React JS, React-Router-DOM, Redux-Toolkit, CSS, JavaScript"
          website="https://humdrum-smell.surge.sh/"
          code="https://github.com/Mateeb11/rest-countries-api-with-color-theme-switcher-master"
        />
        <Project
          image={isBigScreen ? eCommerceDesktop : eCommerceMobile}
          alt="The main page of the website"
          title="E-commerce product page"
          skills="React JS, CSS, JavaScript"
          website="https://present-hook.surge.sh/"
          code="https://github.com/Mateeb11/ecommerce-product-page"
        />
        <Project
          image={isBigScreen ? countdownDesktop : countdownMobile}
          alt="The main page of the website"
          title="Launch Countdown Timer"
          skills="React JS, Sass"
          website="https://timeless-timer.surge.sh/"
          code="https://github.com/Mateeb11/launch-countdown-timer"
        />
        <Project
          image={isBigScreen ? gpaDesktop : gpaMobile}
          alt="The main page of the website"
          title="GPA Calculator"
          skills="React JS"
          website="https://gpa-calc.surge.sh/"
          code="https://github.com/Mateeb11/GPA-Calculator"
        />
      </div>
    </section>
  );
}
