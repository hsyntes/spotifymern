import { motion } from "framer-motion";

const Playing = ({ className }) => {
  const classes = `flex items-end ${className}`;

  return (
    <div className={classes}>
      <motion.div
        className="bg-primary rounded me-1"
        style={{ width: "3px" }}
        animate={{ height: [0, 15, 0] }}
        transition={{
          ease: "easeInOut",
          delay: 0.15,
          duration: 1,
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="bg-primary rounded me-1"
        style={{ width: "3px" }}
        animate={{ height: [5, 15, 5] }}
        transition={{
          ease: "easeInOut",
          delay: 0.35,
          duration: 1,
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="bg-primary rounded me-1"
        style={{ width: "3px" }}
        animate={{ height: [0, 15, 0] }}
        transition={{
          ease: "easeInOut",
          delay: 0.15,
          duration: 1,
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="bg-primary rounded"
        style={{ width: "3px" }}
        animate={{ height: [5, 15, 5] }}
        transition={{
          ease: "easeInOut",
          delay: 0.35,
          duration: 1,
          repeat: Infinity,
        }}
      ></motion.div>
    </div>
  );
};

export default Playing;
