import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">Welcome to Admin</h1>
        <p className="home-description">
          <Link to="/newEmployeeLogin" className="example_e">
            Create a New User Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Home
