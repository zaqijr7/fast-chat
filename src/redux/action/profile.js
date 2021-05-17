import http from '../../helpers/http'


export const updateProfile = (file, name, token) => {
  return async dispatch => {
    try {
      if (file !== null) {
        const formData = new FormData()
        formData.append('photo', file)
        try {
          const updatePhoto = await http(token).put('profile', formData)
          console.log(updatePhoto);
        } catch (err) {
          console.log(err);
        }
      }
      const data = new URLSearchParams()
      data.append('name', name)
      const response = await http(token).patch('profile', data)
      console.log(response);
      dispatch({
        type: 'UPDATE_PROFILE',
        user: response.data.results
      })
    } catch (err) {
      dispatch({
        type: 'MESSAGE',
        message: 'Please try again letter'
      })
    }
  }
}
