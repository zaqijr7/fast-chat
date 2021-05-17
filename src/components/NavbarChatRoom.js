import React from 'react'
import { useSelector } from 'react-redux'


// <--------- Import Assets --------->
import avatar from '../assets/image/2.png'
const { REACT_APP_API_URL: API_URL } = process.env

function NavbarChatRoom() {
  const chatFocus = useSelector(state => state.chat.chatFocus)
  return (
    <div className={`col-12 bg-navbar border border-start-2 d-inline-flex navbar-height align-items-center`}>
      {
        chatFocus !== null ?
        <>
      <div className="col-md-1 col-2">
        <img src={chatFocus.photo !== `${API_URL}null` ? chatFocus.photo : avatar} alt="avatar" className="avatar-icon me-3" />
      </div>
      <div className="col-md-11 col-10 d-flex flex-row align-items-center justify-content-between">
        <div>
          <span className="fw-bold">{chatFocus.name}</span> <br />
          <span>online</span>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical mx-3" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>
      </>
      :
        <h4 className="fw-bold color-yellow">Wellcome to Fast Chat</h4>
      }
    </div>
  )
}

export default NavbarChatRoom
