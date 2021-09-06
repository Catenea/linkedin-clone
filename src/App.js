
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
