export interface Person {
  id: string;
  name: string;
}

export interface Films {
  [key: string]: {
    title: string;
    persons: Person[];
  };
}
