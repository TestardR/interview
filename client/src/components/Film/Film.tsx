import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Film: React.FC<any> = ({ film }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} data-test="component-film">
      <CardContent>
        <Typography variant="h5" component="h2">
          {film.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Film;
