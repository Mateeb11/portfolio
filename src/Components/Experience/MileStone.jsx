import classes from "../Experience/Experience.module.scss";

export default function MileStone({ title, company, time, current }) {
  return (
    <li className={`${classes.milestone} ${current && classes.current}`}>
      <div className={classes.content}>
        <span>{title}</span>
        <span className={classes.small}>{company}</span>
        <span className={classes.small}>{time}</span>
      </div>
    </li>
  );
}
