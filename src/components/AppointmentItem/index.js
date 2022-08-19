import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const formattedDate = format(date)

  const onClickStar = () => {
    const {toggleIsStarred} = props
    toggleIsStarred(id)
  }

  return (
    <li>
      <div>
        <div>
          <p>{title}</p>
          <button type="button" testId="star" onClick={onClickStar}>
            <img src={starImageUrl} alt="star" />
          </button>
        </div>
        <p>Date: {formattedDate}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
