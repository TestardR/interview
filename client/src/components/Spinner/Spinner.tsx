import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Logo from "../../media/studio-ghibli-logo.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  logo: {
    height: "300px",
    marginBottom: theme.spacing(2),
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-test="component-spinner">
      <img src={Logo} className={classes.logo} alt="Ghibli's logo" />
      <Typography variant="h4" component="h2">
        Take it easy, data is loading...
      </Typography>
      <LinearProgress />
      <LinearProgress />
    </div>
  );
}
