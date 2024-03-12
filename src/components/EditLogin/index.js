import {Component} from 'react'

class EditLogin extends Component {
  constructor(props) {
    super(props)
    const stringifiedData = localStorage.getItem('employeeData')
    this.state = {
      formData: JSON.parse(stringifiedData),
    }
  }

  handleChange = e => {
    const {formData} = this.state
    const {name, value, type, checked} = e.target
    const updatedFormData = {formData}

    if (type === 'checkbox') {
      if (checked) {
        updatedFormData[name] = [...updatedFormData[name], value]
      } else {
        updatedFormData[name] = updatedFormData[name].filter(
          item => item !== value,
        )
      }
    } else {
      updatedFormData[name] = value
    }

    this.setState({formData: updatedFormData})
  }

  handleSubmit = e => {
    e.preventDefault()
    // Add your submit logic here, such as saving the updated data to localStorage or sending it to a server.
  }

  render() {
    const {formData} = this.state

    return (
      <div className="new-login-container">
        <div className="new-login-card">
          <form onSubmit={this.handleSubmit}>
            <div className="label-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                value={formData.name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="label-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={formData.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="label-container">
              <label htmlFor="mobileNo">Mobile No</label>
              <input
                type="text"
                placeholder="Mobile No"
                id="mobileNo"
                value={formData.mobileNo}
                onChange={this.onChangeMobileNo}
              />
            </div>
            <div className="label-container">
              <label htmlFor="dropdown">Designation</label>
              <select
                id="dropdown"
                value={formData.designation}
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
                    checked={formData.gender === 'Male'}
                    onChange={this.onChangeGender}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'Female'}
                    onChange={this.onChangeGender}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'Other'}
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
                  checked={formData.courses && formData.courses.includes('MCA')} // Check if courses exists before using includes
                  onChange={this.onChangeCourse}
                />
                <label htmlFor="MCA">MCA</label>
                <input
                  type="checkbox"
                  id="BCA"
                  value="BCA"
                  checked={formData.courses && formData.courses.includes('BCA')} // Check if courses exists before using includes
                  onChange={this.onChangeCourse}
                />
                <label htmlFor="BCA">BCA</label>
                <input
                  type="checkbox"
                  id="BSC"
                  value="BSC"
                  checked={formData.courses && formData.courses.includes('BSC')} // Check if courses exists before using includes
                  onChange={this.onChangeCourse}
                />
                <label htmlFor="BSC">BSC</label>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EditLogin
