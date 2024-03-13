import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const data = localStorage.getItem('newData')
  const parsedData = JSON.parse(data)
  console.log(parsedData)

  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  return (
    <nav className="nav-header">
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div>
        <Link to="/employeeList">
          <h1>Employees List</h1>
        </Link>
      </div>
      <div>
        <h1>Good Morning-</h1>
      </div>
      <div>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)