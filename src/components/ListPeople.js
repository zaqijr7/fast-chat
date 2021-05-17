import React from 'react'
import avatar from '../assets/image/2.png'
const { REACT_APP_API_URL: API_URL } = process.env


function ListPeople(props) {
  return (
    <div className="row m-0 p-0">
      <div className="col-12 d-flex flex-row py-3">
        <div className="col-2 me-2">
          <img src={props.photo === `${API_URL}null` ? avatar : props.photo} alt="profile" className="avatar-icon" />
        </div>
        <div className="col-10 d-flex flex-row justify-content-between align-items-center px-2">
          <div className="overflow-hidden">
            <span className="fw-bolder text-dark">{props.name}</span>
          </div>
        </div>
      </div>
      <div className="line" />
    </div>
  )
}

export default ListPeople
