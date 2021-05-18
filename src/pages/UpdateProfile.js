import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// <------------- import components -------------->
import ContainerAuth from '../components/ContainerAuth'

// <--------- Import Assets --------->
import avatar from '../assets/image/avatar.png'

// <--------- Import Action --------->
import { updateProfile } from '../redux/action/profile'
import { cleanMessage } from '../redux/action/auth'
import { useHistory } from 'react-router'

function UpdateProfile() {
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const fileUrl = file !== null ? URL.createObjectURL(file) : avatar
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = async () => {
    try {
      await dispatch(updateProfile(file, name, token))
      history.push({
        pathname: '/'
      });
    } catch (err) {
      console.log(err);
    } 
  }

  useEffect(() => {
    return () => {
      dispatch(cleanMessage())
    }
  }, [])

  return (
    <ContainerAuth>
      <div className="card card-auth">
        <div className="card-header bg-white">
          <h3 className="fw-bold text-center">
            Update Profile
          </h3>
        </div>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <p className="text-center">Complete your personal data</p>
          <div className="d-flex justify-content-center align-items-center">
            <img src={fileUrl} alt="update" className="photo-input" />
            <input className="input-photo" type="file" name="photo" onChange={(event) => setFile(event.target.files[0])} />
          </div>
          <p>Choose your photo, Max size 50Kb</p>
          <div className="input-group mb-3 position-relative justify-content-end align-items-center">
            <input type="text" className="form-control py-2" placeholder="Input your name" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setName(e.target.value)} />
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person me-3 text-muted position-absolute" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </div>
          <div className="d-flex justify-content-center my-3">
            <div className={`btn bg-yellow fw-bold text-white ${name.length === 0 && 'disabled'}`} onClick={() => handleClick()}>
              Next
            </div>
          </div>
        </div>
      </div>
    </ContainerAuth>
  )
}

export default UpdateProfile
