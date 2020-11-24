import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import FunPage from './components/FunPage'
import Navbar from './components/Navbar'
import FindStorms from './components/FindStorms'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/LandingPage' render={(props) => <LandingPage {...props} />} />
        <Route exact path='/FunPage' render={(props) => <FunPage {...props} />} />
        <Route exact path='/FindStorms' render={(props) => <FindStorms {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
