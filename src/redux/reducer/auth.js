const initialState = {
    token: null,
    email: null,
    user: null,
    message: null,
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN': {
        return {
          ...state,
          token: action.token,
          message: action.message
        }
      }
      case 'UPDATE_PROFILE': {
        return {
          ...state,
          user: action.user,
        }
      }
      case 'SEND_MAIL': {
        return {
          ...state,
          email: action.email,
        }
      }
      case 'CLEAN_MESSAGE': {
        return {
          ...state,
          message: ''
        }
      }
      case 'MESSAGE': {
        return {
          ...state,
          message: action.message
        }
      }
      default: {
        return {
          ...state
        }
      }
    }
  }
  
  export default authReducer
  