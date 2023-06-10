import classes from "./Footer.module.scss";

import Social from "../../UI/Social";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Social />

      <p>Copyright © 2023 Mateeb Alharbi. all rights reserved</p>
    </footer>
  );
}
