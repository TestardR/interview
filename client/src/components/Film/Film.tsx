import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import AdbIcon from "@material-ui/icons/Adb";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import { Film as IFilm } from "../../Types";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    paddingLeft: theme.spacing(0.5),
  },
  subtitle: {
    marginBottom: theme.spacing(0.5),
  },
  persons: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(2),
  },
}));

const Film: React.FC<IFilm> = ({ title, persons }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} data-test="component-film">
      <CardContent>
        <Grid container alignItems="center">
          <Grid item>
            <AdbIcon />
          </Grid>
          <Grid item>
            <Typography variant="h5" component="h2" className={classes.title}>
              {title}
            </Typography>
          </Grid>
        </Grid>

        {Array.isArray(persons) && persons.length ? (
          <div className={classes.persons}>
            <Typography
              className={classes.subtitle}
              variant="h6"
              component="h2"
            >
              Actors
            </Typography>
            {persons.map((person) => (
              <Grid key={person.id} container alignItems="center">
                <ArrowRightIcon />
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {person.name}
                </Typography>
              </Grid>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default Film;
