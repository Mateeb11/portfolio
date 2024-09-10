import classes from "./SectionTitle.module.scss";

export default function SectionTitle({ title, smallMargin }) {
  return (
    <h2 className={`${classes.title} ${smallMargin && classes.smallMargin}`}>
      {title}
    </h2>
  );
}
