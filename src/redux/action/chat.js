import http from "../../helpers/http"

export const chatFocusById = (id) => {
  return async dispatch => {
    dispatch({
      type: 'CHAT_FOCUS',
      chatFocus: id,
    })
  }
}

export const historyInteractions = (token) => {
  return async dispatch => {
    try {
      const response = await http(token).get('history')
      dispatch({
        type: 'HISTORY_INTERACTIONS',
        historyInteractions: response.data.results
      })
    } catch (err) {
      dispatch({
        type: 'MESSAGE',
        message: 'Please try again later'
      })
    }
  }
}

export const chatFocus = (data, token) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'CHAT_FOCUS',
        chatFocus: data
      })
      const response = await http(token).get(`chat/${data.id}`)
      console.log(response);
      dispatch({
        type: 'MESSAGE_HISTORY',
        messageHistory: response.data.result
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const sendMessage = (message, receipent, token) => {
  return async dispatch => {
    try {
      const data = new URLSearchParams()
      data.append('message', message)
      await http(token).post(`chat?receipentId=${receipent}`, data)
      const getChat = await http(token).get(`chat/${receipent}`)
      dispatch({
        type: 'MESSAGE_HISTORY',
        messageHistory: getChat.data.result
      })
    } catch (err) {
      console.log(err);
    }
  }
}
