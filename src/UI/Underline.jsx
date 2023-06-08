import classes from "./Underline.module.scss";

export default function UnderLine({ children }) {
  return <span className={classes.line}>{children}</span>;
}
