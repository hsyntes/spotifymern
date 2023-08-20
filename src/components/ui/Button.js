const Button = ({
  type,
  variant,
  className,
  onClick,
  style,
  children,
  disabled,
}) => {
  let classes = `font-black px-4 py-2 rounded shadow transition text-sm ${className} `;

  if (variant === "primary")
    classes += "bg-primary hover:bg-primary-dark text-white";

  if (variant === "dark" || variant === "black")
    classes += "bg-dark hover:bg-black text-white";

  if (variant === "light" || variant === "white")
    classes += "bg-light hover:bg-white text-dark";

  if (variant === "danger") classes += "bg-danger hover:bg-red-500 text-white";

  if (variant === "link") classes += "shadow-none  !px-0 !py-0";

  if (variant === "blue") classes += "bg-blue-700 hover:bg-blue-900 text-white";

  if (variant === "pink") classes += "bg-pink-700 hover:bg-pink-900 text-white";

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
