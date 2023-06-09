import classes from "./SectionTitle.module.scss";

export default function SectionTitle({ title }) {
  return <h2 className={classes.title}>{title}</h2>;
}
