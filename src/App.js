import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { makeStyles } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles((theme) => ({
 
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
