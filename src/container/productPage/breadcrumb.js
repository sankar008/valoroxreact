import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

// function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function SimpleBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="lg:py-5">
      <Link to="/">
        <span className="hover:text-black">Valeorx</span>
      </Link>
      <Link to={"/category/" + props.category_slug}>
        <span className="hover:text-black">{props.category}</span>
      </Link>
      <Typography color="textPrimary">{props.product}</Typography>
    </Breadcrumbs>
  );
}
