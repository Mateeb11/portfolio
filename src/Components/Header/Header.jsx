import classes from "./Header.module.scss";

import Social from "../../UI/Social";

export default function Header() {
  return (
    <header className={classes.header}>
      <Social />
    </header>
  );
}
