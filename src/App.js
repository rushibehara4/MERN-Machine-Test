import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import NewLogin from './components/NewLogin'

import './App.css'
import EmployeesList from './components/EmployeesList'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/newLogin" component={NewLogin} />
      <Route exact path="/employeeList" component={EmployeesList} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
