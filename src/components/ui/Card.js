const Card = ({ id, className, onClick, children }) => {
  const classes = `card p-6 bg-white dark:bg-dark rounded shadow ${className}`;
  return (
    <div id={id} className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, style }) => {
  const classes = `card-header ${className}`;
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

const CardBody = ({ className, children }) => {
  const classes = `card-body ${className}`;
  return <div className={classes}>{children}</div>;
};

const CardFooter = ({ className, children }) => {
  const classes = `card-footer ${className}`;
  return <div className={classes}>{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
