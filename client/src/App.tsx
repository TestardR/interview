import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import FilmList from "./components/FilmList/FilmList";
import Spinner from "./components/Spinner/Spinner";
import { URL } from "./Constants";
import { useFetch } from "./hooks/useFetch";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },
  navbar: {
    background: "#2E3B55",
  },
  container: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(5),
  },
}));

function App() {
  const classes = useStyles();
  const data = useFetch(URL);
  return (
    <div data-test="component-app">
      <AppBar className={classes.navbar}>
        <Toolbar>
          <AccountCircleTwoToneIcon />
          <Typography
            variant="h6"
            className={classes.title}
            data-test="navbar-title"
          >
            Ghibli's movies and actors
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        {!data || data.loading ? <Spinner /> : <FilmList films={data} />}
      </Container>
    </div>
  );
}

export default App;
