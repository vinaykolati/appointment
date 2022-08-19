import {Component} from 'react'
import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentsList: '',
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  renderAppointments = () => {
    const {appointmentsList} = this.state

    return appointmentsList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
        toggleIsStarred={this.toggleIsStarred}
      />
    ))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: dateInput,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onChangeDateInput = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  render() {
    return (
      <div className="app-container">
        <div className="appointment-add-container">
          <div className="appointment-container">
            <form className="form" onSubmit={this.onAddAppointment}>
              <h1 className="appointment-heading">Add Appointment</h1>
              <p className="title">TITLE</p>
              <input
                type="text"
                placeholder="Title"
                className="title-input"
                value="titleInput"
                onChange={this.onChangeTitleInput}
              />
              <p className="date">DATE</p>
              <input
                type="date"
                placeholder="dd/mm/yy"
                className="date-input"
                value="dateInput"
                onChange={this.onChangeDateInput}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="line" />
          <div className="list-container">
            <p className="appointments">Appointments</p>
            <button type="submit" className="star-button">
              starred
            </button>
          </div>
          <ul className="all-appointments">{this.renderAppointments()}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments
