import {Component} from 'react'
import Header from '../Header'
import './index.css'

class EmployeesList extends Component {
  state = {
    employeeData: [],
  }

  componentDidMount() {
    const storedLoginData = localStorage.getItem('employeeData')
    const parsedData = storedLoginData ? JSON.parse(storedLoginData) : []
    this.setState({employeeData: parsedData})
  }

  onDeleteId = id => {
    const {employeeData} = this.state
    const updatedEmployeeData = employeeData.filter(
      employee => employee.id !== id,
    )
    this.setState({employeeData: updatedEmployeeData})
    localStorage.setItem('employeeData', JSON.stringify(updatedEmployeeData))
  }

  render() {
    const {employeeData} = this.state
    return (
      <div>
        <Header />
        <ul className="list-element">
          {employeeData.length > 0 ? (
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Employee Id</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Designation</th>
                  <th>Gender</th>
                  <th>Courses</th>
                  <th>Created Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map(details => (
                  <tr key={details.id} className="employee-item">
                    <td>{details.id}</td>
                    <td>
                      <img src={details.image} alt="Employee" />
                    </td>
                    <td>{details.name}</td>
                    <td>
                      <a href={`mailto:${details.email}`}>{details.email}</a>
                    </td>
                    <td>{details.mobileNo}</td>
                    <td>{details.designation}</td>
                    <td>{details.gender}</td>
                    <td>{details.courses.join(', ')}</td>
                    <td>{details.createdDate}</td>
                    <td>
                      <button type="button">Edit</button>
                      <button
                        type="button"
                        onClick={() => this.onDeleteId(details.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <li>No employee data available</li>
          )}
        </ul>
      </div>
    )
  }
}

export default EmployeesList