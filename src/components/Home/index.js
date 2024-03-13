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
        <h1>Welcome to Admin</h1>
        <Link to="/newLogin">
          <p>Create a New Login User</p>
        </Link>
      </div>
    </div>
  )
}

export default Home