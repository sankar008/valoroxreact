import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const category = props.categories;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">
          <ListItem button className="bg-red-800">
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        {category.map((item, index) => {
          return (
            <Link to={"/category/" + item.slug} key={index}>
              <ListItem button>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          );
        })}

        <Link to="/profile">
          <ListItem button>
            <ListItemText primary={"My Account"} />
          </ListItem>
        </Link>
        <Link to="/wishlist">
          <ListItem button>
            <ListItemText primary={"Wishlist"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      {/* <Link to=""> */}
      {/* <ListItem button> */}

      {/* </ListItem> */}
      {/* </Link> */}
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
