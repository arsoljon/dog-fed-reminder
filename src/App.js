import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Error from './pages/Error'
import History from './pages/History'
import Reminder from './pages/Reminder'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/reminder">
            <Reminder />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
