import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main'
import Second from './components/Second'
import './main.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/photos" component={Second} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;