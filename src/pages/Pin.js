import React, { useEffect, useState } from 'react'
import PinInput from 'react-pin-input'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ContainerAuth from '../components/ContainerAuth';
import { login } from '../redux/action/auth';

function Pin() {
  const [pin, setPin] = useState('')
  const token = useSelector(state => state.auth.token)
  const data = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = () => {
    dispatch(login(data.email, pin))
    history.push({
      pathname: '/update-profile'
    });
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
  return (
    <ContainerAuth>
      <div className="card card-auth">
        <div className="card-header bg-white">
          <h3 className="fw-bold text-center">
            Fast Chat Login
          </h3>
        </div>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <p className="text-center">We have sent pin verification to : {data.email}</p>
          {data.message !== null && (
            <div class="alert alert-danger" role="alert">
              {data.message}
            </div>
          )}
          <PinInput
            length={5}
            initialValue=""
            secret
            onChange={(value, index) => { setPin(value); }}
            type="numeric"
            inputMode="number"
            style={{ padding: '10px' }}
            inputStyle={{
              borderColor: '#A98600',
              borderRight: '0px',
              borderLeft: '0px',
              borderTop: '0px',
              marginRight: '10px',
              borderBottomWidth: '2px'
            }}
            inputFocusStyle={{ borderColor: 'blue' }}
            onComplete={(value, index) => { }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          <div className="d-flex justify-content-center my-3">
            <div className={`btn bg-yellow fw-bold text-white ${pin.length !== 5 || pin === null && 'disabled'}`} onClick={() => handleClick()}>
              Login
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-in-right ms-3" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </ContainerAuth>
  )
}

export default Pin
