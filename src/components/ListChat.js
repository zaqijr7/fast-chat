import React from 'react'

import avatar from '../assets/image/2.png'

function ListChat(props) {
  return (
    <div className="row">
      <div className="col-12 d-flex flex-row py-3">
        <div className="col-2 me-2">
          <img src={avatar} alt="profile" className="avatar-icon" />
        </div>
        <div className="col-10 d-flex flex-row justify-content-between align-items-center">
          <div className="overflow-hidden">
            <span className="fw-bolder">{props.name}</span> <br />
            <span>{props.lastMessage.length > 30 ? `${props.lastMessage.substring(0, 19)}...` : props.lastMessage}</span>
          </div>
          <p className="text-end">{props.time}</p>
        </div>
      </div>
      <div className="line" />
    </div>
  )
}

export default ListChat
