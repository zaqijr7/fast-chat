import http from '../../helpers/http'

export const sendMail = (email) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SEND_MAIL',
        email: email,
      })
      const params = new URLSearchParams()
      params.append('email', email)
      await http().post('auth', params)
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

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT',
    })
  }
}
