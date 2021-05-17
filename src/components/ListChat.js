import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import avatar from '../assets/image/2.png'
const { REACT_APP_API_URL: API_URL } = process.env

function ListChat(props) {
  const profile = useSelector(state => state.auth.user)
  if (props.sender === profile.id_user ) {
    return (
      <div className="row m-0 p-0">
        <div className="col-12 d-flex flex-row py-3">
          <div className="col-2 me-2">
            <img src={props.receipentPhoto === `${API_URL}null` ? avatar : props.receipentPhoto} alt="profile" className="avatar-icon" />
          </div>
          <div className="col-10 d-flex flex-row justify-content-between align-items-center px-2">
            <div className="overflow-hidden">
              <span className="fw-bolder text-dark">{props.receipentName}</span> <br />
              <span className="text-dark">{props.message.length > 30 ? `${props.message.substring(0, 19)}...` : props.message}</span>
            </div>
            <p className="text-end text-muted">{moment(props.createdAt).format('LT')}</p>
          </div>
        </div>
        <div className="line" />
      </div>
    )
  } else {
    return (
      <div className="row m-0 p-0">
        <div className="col-12 d-flex flex-row py-3">
          <div className="col-2 me-2">
            <img src={props.senderPhoto === `${API_URL}null` ? avatar : props.senderPhoto} alt="profile" className="avatar-icon" />
          </div>
          <div className="col-10 d-flex flex-row justify-content-between align-items-center px-2">
            <div className="overflow-hidden">
              <span className="fw-bolder text-dark">{props.senderName}</span> <br />
              <span className="text-dark">{props.message.length > 30 ? `${props.message.substring(0, 19)}...` : props.message}</span>
            </div>
            <p className="text-end text-muted">{moment(props.createdAt).format('LT')}</p>
          </div>
        </div>
        <div className="line" />
      </div>
    )
  }
  
}

export default ListChat
