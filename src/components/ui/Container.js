const Container = ({ className, children }) => {
  const classes = `container mx-auto p-3 ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Container;
