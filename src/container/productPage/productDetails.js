import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const { description, additional } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //   setValue(newValue);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className="outline-none">
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator,
          }}
          //   indicatorColor={"#d3d3d3"}
          TabIndicatorProps={{
            style: { background: "maroon", outline: "none" },
          }}
          //   Selected
          aria-label="simple tabs example"
          className="bg-white text-black active:outline-none"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional Information" {...a11yProps(1)} />
          {/* <Tab label="Review" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <span dangerouslySetInnerHTML={{ __html: description }}>
          {/* {description} */}
        </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span dangerouslySetInnerHTML={{ __html: additional }}>
          {/* {description} */}
        </span>
      </TabPanel>
    </div>
  );
}
