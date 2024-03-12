import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class EmployeesList extends Component {
  state = {
    employeeData: JSON.parse(localStorage.getItem('employeeData')) || [],
    redirectToEdit: false,
    editId: null,
  }

  onEditId = id => {
    const {history} = this.props
    this.setState({redirectToEdit: true, editId: id})
    history.push('/employeeList')
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
    const {employeeData, redirectToEdit, editId} = this.state

    if (redirectToEdit) {
      return <Redirect to={`/editLogin/${editId}`} />
    }

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
                {employeeData.map(employee => (
                  <tr key={employee.id} className="employee-item">
                    <td>{employee.id}</td>
                    <td>
                      <img src={employee.image} alt="Employee" />
                    </td>
                    <td>{employee.name}</td>
                    <td>
                      <a href={`mailto:${employee.email}`}>{employee.email}</a>
                    </td>
                    <td>{employee.mobileNo}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.courses.join(', ')}</td>
                    <td>{employee.createdDate}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => this.onEditId(employee.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => this.onDeleteId(employee.id)}
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
