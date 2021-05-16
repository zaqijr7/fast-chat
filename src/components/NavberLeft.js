import React from 'react'

// <--------- Import Assets --------->
import avatar from '../assets/image/avatar.png'

function NavberLeft() {
  return (
    <>
      <div className="col-12 bg-navbar py-2 d-flex flex-row align-items-center justify-content-between">
        <img src={avatar} alt="avatar" className="avatar-icon"/>
        <button type="button" className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Find People">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </>
  )
}

export default NavberLeft
