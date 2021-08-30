import './App.css';
import Length from './components/Length';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Temperature from './components/Temperature';
import Time from './components/Time';


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <h1 className='app-title p-2 mt-2'>Unit converter</h1>

          <Route path ='/length'>
            <Length/>
          </Route>

          <Route path='/temp'>
            <Temperature/>
          </Route>
          
          <Route path='/time'>
            <Time/>
          </Route>
          
          <Route exact path='/'>
            <Length/>
          </Route>

        </div>
      </Switch>
    </Router>
  );
}

export default App;
