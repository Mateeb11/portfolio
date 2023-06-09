import classes from "./Underline.module.scss";

export default function UnderLine({ children, className }) {
  return <span className={`${classes.line} ${className}`}>{children}</span>;
}
