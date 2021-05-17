const initialState = {
  chatFocus: null,
  messageHistory: [],
  historyInteractions: [],
}

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHAT_FOCUS': {
      return {
        ...state,
        chatFocus: action.chatFocus,
      }
    }
    case 'HISTORY_INTERACTIONS': {
      return {
        ...state,
        historyInteractions: action.historyInteractions,
      }
    }
    case 'MESSAGE_HISTORY': {
      return {
        ...state,
        messageHistory: action.messageHistory,
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default charReducer
