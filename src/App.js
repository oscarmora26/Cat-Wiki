import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './components/pages/HomePage/HomePage.jsx';
import CatBreedPage from './components/pages/CatBreedPage/CatBreedPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/breed/:id" component={CatBreedPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
