import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// <--------- Import Assets --------->
import avatar from '../assets/image/avatar.png'
import { logout } from '../redux/action/auth'
import { expandFindPeople, searchPeople } from '../redux/action/chat'
const { REACT_APP_API_URL: API_URL } = process.env

function NavberLeft() {
  const profile = useSelector(state => state.auth.user)
  const expandFind = useSelector(state => state.chat.expandFindPeople)
  console.log(expandFind);
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(expandFindPeople(expandFind))
  }

  const handleChange = (value) => {
    dispatch(searchPeople(value))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <div className={`col-12 bg-navbar d-flex flex-row align-items-center justify-content-between navbar-height`}>
        {
          expandFind === true ?
            <>
              <input type="text" className="form-control py-2 me-2 search-input" placeholder="Search people" aria-label="Search name" aria-describedby="basic-addon1" onChange={(e) => handleChange(e.target.value)} />
            </>
            :
            <>
              <div class="dropdown">
                <div type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={profile.photo === `${API_URL}null` ? avatar : profile.photo} alt="avatar" className="avatar-icon" />
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><span className="dropdown-item" onClick={() => handleLogout()} >Logout</span></li>
                </ul>
              </div>
            </>
        }
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search pointer-cursor" viewBox="0 0 16 16" onClick={(e) => handleClick()} >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    </>
  )
}

export default NavberLeft
