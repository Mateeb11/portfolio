import classes from "./Button.module.scss";

export default function Button({ children, href, target }) {
  return (
    <a className={classes.button} href={href} target={target}>
      {children}
    </a>
  );
}
