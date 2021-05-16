const initialState = {
    token: null,
    user: null,
    message: '',
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN': {
        return {
          ...state,
          token: action.payload,
          user: action.user,
          message: action.message
        }
      }
      case 'ERROR_MESSAGE': {
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
  