import classes from "./Button.module.scss";

export default function Button({
  children,
  href,
  target,
  button = false,
  onClick,
  className,
}) {
  return button ? (
    <button
      className={`${classes.button} ${className}`}
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  ) : (
    <a className={`${classes.button} ${className}`} href={href} target={target}>
      {children}
    </a>
  );
}
