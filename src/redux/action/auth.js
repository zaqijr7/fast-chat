import http from '../../helpers/http'
import jwt from 'jwt-decode'

export const sendMail = (email) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('email', email)
    try {
      await http().post('auth', params)
      dispatch({
        type: 'SEND_MAIL',
        email: email,
      })
    } catch (err) {
      const { message } = err.response.data
      console.log(message);
    }
  }
}

export const login = (email, pin) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('pin', pin)
    try {
      const response = await http().patch('auth', params)
      dispatch({
        type: 'LOGIN',
        token: response.data.results.token,
        message: response.data.message
      })
    } catch (err) {
      const { message } = err.response.data
      console.log(message);
      dispatch({
        type: 'MESSAGE',
        message: message
      })
    }
  }
}

export const cleanMessage = () => {
  return async dispatch => {
    dispatch({
      type: 'CLEAN_MESSAGE'
    })
  }
}
