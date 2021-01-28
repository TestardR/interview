export interface Film {
  [key: string]: {
    title: string;
    persons: Person[];
  };
}

export interface Films {
  films: Films[];
}

export interface Person {
  id: string;
  name: string;
}
