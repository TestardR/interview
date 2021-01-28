export interface IFilm {
  film: { title: string; persons: IPerson[] | [] };
}

export interface IFilms {
  [id: string]: { title: string; persons: IPerson[] | [] };
}

export interface IPerson {
  id: string;
  name: string;
}
