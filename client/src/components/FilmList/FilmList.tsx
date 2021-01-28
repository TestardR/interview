import React from "react";
import { Grid } from "@material-ui/core";
import { IFilms } from "../../Types";
import Film from "../Film/Film";

const FilmList: React.FC<IFilms> = ({ films }) => {
  const data = Object.entries(films);
  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      data-test="component-film-list"
    >
      {data.map((film) => {
        return (
          <Grid>
            <Film key={film[0]} film={film[1]} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FilmList;
