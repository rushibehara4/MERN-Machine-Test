import {Component} from 'react'
import './index.css'

class NewEmployeeDetails extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    mobileNo: '',
    designation: 'HR',
    gender: 'male',
    courses: [],
    image: null,
    employeeData: [],
  }

  componentDidMount() {
    const storedEmployeeData =
      JSON.parse(localStorage.getItem('employeeData')) || []
    this.setState({employeeData: storedEmployeeData})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {
      name,
      email,
      mobileNo,
      designation,
      gender,
      courses,
      image,
      employeeData,
    } = this.state

    const currentDate = new Date()
    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Month is zero-based
    const year = String(currentDate.getFullYear()).slice(-2) // Get last two digits of year

    const createdDate = `${day}-${month}-${year}` // Format as dd-mm-yy

    const newUserLoginDetails = {
      name,
      email,
      mobileNo,
      designation,
      gender,
      courses,
      image,
      createdDate,
    }

    const updatedEmployeeDetails = [...employeeData, newUserLoginDetails]
    // console.log(updatedEmployeeDetails)
    this.setState({employeeData: updatedEmployeeDetails}, () => {
      localStorage.setItem(
        'employeeData',
        JSON.stringify(updatedEmployeeDetails),
      )
      this.setState({
        id: '',
        name: '',
        email: '',
        mobileNo: '',
        designation: 'HR',
        gender: 'male',
        courses: [],
        image: null,
      })
    })
  }

  onChangeImage = event => {
    this.setState({image: event.target.files[0]})
  }

  onChangeDesignation = event => {
    this.setState({designation: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeCourse = event => {
    const course = event.target.value
    const {courses} = this.state
    if (courses.includes(course)) {
      this.setState({courses: courses.filter(c => c !== course)})
    } else {
      this.setState({courses: [...courses, course]})
    }
  }

  render() {
    const {id, name, email, mobileNo, designation, gender, courses} = this.state
    return (
      <div className="new-login-container">
        <div className="new-login-card">
          <form onSubmit={this.onSubmitForm}>
            <div className="label-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                value={name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="label-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="label-container">
              <label htmlFor="mobileNo">Mobile No</label>
              <input
                type="text"
                placeholder="Mobile No"
                id="mobileNo"
                value={mobileNo}
                onChange={this.onChangeMobileNo}
              />
            </div>
            <div className="label-container">
              <label htmlFor="dropdown">Designation</label>
              <select
                id="dropdown"
                value={designation}
                onChange={this.onChangeDesignation}
              >
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div className="gender-container">
              <p>Gender</p>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={this.onChangeGender}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={this.onChangeGender}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === 'other'}
                    onChange={this.onChangeGender}
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="course-container">
              <p>Courses</p>
              <div>
                <input
                  type="checkbox"
                  id="MCA"
                  value="MCA"
                  checked={courses.includes('MCA')}
                  onChange={this.onChangeCourse}
                />
                <label htmlFor="MCA">MCA</label>
                <input
                  type="checkbox"
                  id="BCA"
                  value="BCA"
                  checked={courses.includes('BCA')}
                  onChange={this.onChangeCourse}
                />
                <label htmlFor="BCA">BCA</label>
                <input
                  type="checkbox"
                  id="BSC"
                  value="BSC"
                  checked={courses.includes('BSC')}
                  onChange={this.onChangeCourse}
                />
                <label htmlFor="BSC">BSC</label>
              </div>
            </div>
            <div className="label-container">
              <label htmlFor="imageUpload">Img upload:</label>
              <input
                type="file"
                id="imageUpload"
                accept="image/jpeg, image/png"
                onChange={this.onChangeImage}
              />
            </div>
            <button type="submit" key={id}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewEmployeeDetails
