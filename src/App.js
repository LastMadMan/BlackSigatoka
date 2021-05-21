import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TestList from './pages/TestList'
import TestCreate from './pages/TestCreate'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/tests_list" component={TestList} />
        <Route path="/new_test" component={TestCreate} />
      </Switch>
    </Router>
  );
}

export default App;
