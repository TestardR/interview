import { URL } from "./Constants";
import { useFetch } from "./hooks/useFetch";

function App() {
  const data = useFetch(URL);

  console.log(data)

  return <div className="App">Hello</div>;
}

export default App;
