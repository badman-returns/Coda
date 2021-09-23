import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import {  makeStyles } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#fff',
      // backgroundImage: `url(${process.env.PUBLIC_URL + 'background.jpg'})`,
      backgroundImage: 'linear-gradient(360deg, rgba(244,241,246,1) 4%, rgba(203,29,164,1) 85%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -1,
      opacity: 0.8
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Switch>
        <Route path="/">
          <div className={classes.root}>
            <Login />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
