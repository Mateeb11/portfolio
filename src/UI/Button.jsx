import classes from "./Button.module.scss";

export default function Button({
  children,
  href,
  target,
  button = false,
  onClick,
  className,
  download = false,
}) {
  return button ? (
    <div className={`${classes.grayBox}  ${className}`}>
      <button
        className={`${classes.button} ${className}`}
        onClick={onClick}
        type="submit"
      >
        {children}
      </button>
    </div>
  ) : (
    <div className={`${classes.grayBox}  ${className}`}>
      <a
        className={`${classes.button} ${className}`}
        href={href}
        target={target}
        download={download}
      >
        {children}
      </a>
    </div>
  );
}
