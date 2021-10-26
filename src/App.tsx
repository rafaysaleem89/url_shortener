import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import HomePage from './pages/HomePage'

function App() {
  return (
    <HashRouter>
    <AppHeader />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  </HashRouter>
  );
}

export default App;
