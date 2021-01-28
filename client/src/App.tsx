import { Container } from "@material-ui/core";
import FilmList from "./components/FilmList/FilmList";
import Spinner from "./components/Spinner/Spinner";
import { URL } from "./Constants";
import { useFetch } from "./hooks/useFetch";

function App() {
  const data = useFetch(URL);
  return (
    <Container>
      {!data.loading ? <FilmList films={data} /> : <Spinner />}
    </Container>
  );
}

export default App;
