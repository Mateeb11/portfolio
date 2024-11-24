import classes from "./Footer.module.scss";

import Social from "../../UI/Social";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Social />

      <p>Copyright © 2025 Mateeb Alharbi. All rights reserved</p>
    </footer>
  );
}
