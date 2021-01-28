import FilmList from "./components/FilmList/FilmList";
import { URL } from "./Constants";
import { useFetch } from "./hooks/useFetch";

function App() {
  const data = useFetch(URL);

  return data && !data.loading ? <FilmList films={data} /> : <div>Loading</div>;
}

export default App;
