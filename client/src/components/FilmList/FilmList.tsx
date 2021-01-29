import React from "react";
import { Grid } from "@material-ui/core";
import Film from "../Film/Film";
import { Films } from "../../Types";

const FilmList: React.FC<Films> = ({ films }) => {
  if (!films) return  null
  const data = Object.entries(films);
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="space-between"
      data-test="component-film-list"
    >
      {data.map((film) => (
        <Grid key={film[0]} item>
          <Film film={film[1]} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FilmList;
