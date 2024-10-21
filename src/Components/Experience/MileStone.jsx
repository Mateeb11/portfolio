import classes from "../Experience/Experience.module.scss";

export default function MileStone({
  title,
  company,
  time,
  current,
  description = [],
}) {
  return (
    <li className={`${classes.milestone} ${current && classes.current}`}>
      <div className={classes.content}>
        {current && <span className={classes.pulse}></span>}
        <span>{title}</span>
        <span className={classes.small}>{company}</span>
        <span className={classes.small}>{time}</span>
      </div>
      {description && (
        <div className={classes.description}>
          {description.map((line, i) => (
            <span className={classes.small} key={i}>
              - {line}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}
