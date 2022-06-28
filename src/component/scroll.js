import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  Top: {
    width: "45px",
    height: "45px",
    textAlign: "center",
    borderRadius: "50%",
    zIndex: 2,
    position: "fixed",
    bottom: "8vh",
    right: "8vh",
    backgroundColor: "rgba(153, 27, 27)",
    color: "white",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "rgba(153, 27, 27)",
      backgroundColor: "white",
      border: "1px solid rgba(153, 27, 27)",
    },
  },
  icon: {
    width: "40px",
    height: "40px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

// interface Props {
//   showBelow: number;
// }

export default function Scroll(props) {
  const classes = useStyles();
  const [show, setShow] = useState(props.showBelow ? true : false);

  const handleScroll = () => {
    if (window.pageYOffset > props.showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (props.showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {show && (
        <div onClick={handleClick} className={classes.Top}>
          <ExpandLessIcon className={classes.icon} />
        </div>
      )}
    </div>
  );
}
