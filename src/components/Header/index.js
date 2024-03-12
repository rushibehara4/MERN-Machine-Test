import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
  const data = localStorage.getItem('newData')
  const parsedData = JSON.parse(data)
  console.log(parsedData)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/" className="nav-link">
          <h1>Home</h1>
        </Link>
      </div>
      <div>
        <Link to="/employeeList" className="nav-link">
          <h1>Employees List</h1>
        </Link>
      </div>
      <div className="link-container">
        <h1 className="link">
          <a href="https://github.com/rushibehara4" className="link">
            Rishi -
          </a>
        </h1>
      </div>
      <div>
        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default Header
