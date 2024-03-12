import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NewEmployeeLogin from './components/NewEmployeeLogin'
import EmployeeList from './components/EmployeeList'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/newEmployeeLogin" component={NewEmployeeLogin} />
      <Route exact path="/employeeList" component={EmployeeList} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
