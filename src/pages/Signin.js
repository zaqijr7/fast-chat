import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// <------------- import components -------------->
import ContainerAuth from '../components/ContainerAuth'
import { sendMail } from '../redux/action/auth';

function Signin() {
  const [email, setEmail] = useState(null)
  const token = useSelector(state => state.auth.token)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(sendMail(email))
  }

  useEffect(() => {
    if (token && history.location.state) {
      return history.push({
        pathname: `${history.location.state.from.pathname}` || '/'
      });
    } else if (token) {
      return history.push({
        pathname: '/'
      });
    }
  })
  console.log(email);
  return (
    <ContainerAuth>
      <div className="card card-auth">
        <div className="card-header bg-white">
          <h3 className="fw-bold text-center">
            Fast Chat Login
          </h3>
        </div>
        <div className="card-body">
          <p className="text-center">Input your Email</p>
          <div className="input-group mb-3 position-relative justify-content-end align-items-center">
            <input type="email" className="form-control py-2" placeholder="Input your email" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setEmail(e.target.value)} />
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-envelope-open position-absolute me-3 text-muted" viewBox="0 0 16 16">
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
            </svg>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/pin">
              <button className={`btn bg-yellow fw-bold text-white ${email === null ? 'disabled' : ''}`} onClick={(e) => handleClick()}>
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-in-right ms-3" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ContainerAuth>
  )
}

export default Signin
