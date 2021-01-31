import React from "react";
import { Grid } from "@material-ui/core";
import Film from "../Film/Film";
import { Film as IFilm, Films } from "../../Types";

interface IProps {
  data: Films;
}

const FilmList: React.FC<IProps> = ({ data = {} }) => {
  const films = Object.entries(data);
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="space-between"
      data-test="component-film-list"
    >
      {films.map((film) => {
        return (
          <Grid key={film[0] as string} item>
            <Film {...(film[1] as IFilm)} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FilmList;
