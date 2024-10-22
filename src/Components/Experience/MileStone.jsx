import classes from "../Experience/Experience.module.scss";

import { useCollapse } from "react-collapsed";

import arrow from "../../assets/arrow-down.svg";

export default function MileStone({
  title,
  company,
  time,
  current,
  description = [],
}) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <li className={`${classes.milestone} ${current && classes.current}`}>
      <div className={classes.content} {...getToggleProps()} tabIndex="-1">
        {/* {current && <span className={classes.pulse}></span>} */}
        <span>{title}</span>
        <span className={classes.small}>{company}</span>
        <div className={classes.timeMore}>
          <span className={classes.small}>{time}</span>
          <button className={`${classes.collapseBtn} ${classes.small}`}>
            {isExpanded ? "Less" : "More"}
            <img
              className={`${classes.arrow} ${isExpanded && classes.rotate}`}
              src={arrow}
            ></img>
          </button>
        </div>
      </div>
      {description.length > 0 && (
        <>
          <p className={classes.description} {...getCollapseProps()}>
            {description.map((line, i) => (
              <span className={classes.small} key={i}>
                - {line}
                <br />
              </span>
            ))}
          </p>
        </>
      )}
    </li>
  );
}
