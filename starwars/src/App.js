import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ListContainer from './containers/ListContainer';
import StarWarsState from './context/StarWarsState';


function App() {

  return (
    <StarWarsState>
      
  <Router>
    <Switch>
    <Route exact path='/' component={Home} />
   <Route path='/starwars' component={ListContainer} />
    </Switch>
  </Router>
    </StarWarsState>
  
 

  );
}

export default App;
