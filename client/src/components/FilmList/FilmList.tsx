import React from "react";
import { Films } from "../../Types";

const FilmList: React.FC<Films> = ({ films }) => {
  console.log(films);
  return <div data-test="component-film-list"></div>;
};

export default FilmList;
