import React from 'react'

// <--------- Import Assets --------->
import avatar from '../assets/image/2.png'

function NavbarChatRoom() {
  return (
    <div className="col-12 py-2 bg-navbar border border-start-2 d-inline-flex">
      <div className="col-md-1 col-2">
        <img src={avatar} alt="avatar" className="avatar-icon me-3" />
      </div>
      <div className="col-md-11 col-10 d-flex flex-row align-items-center justify-content-between">
        <div>
          <span className="fw-bold">Jarott</span> <br />
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
    </div>
  )
}

export default NavbarChatRoom
