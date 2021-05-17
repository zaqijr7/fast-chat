const initialState = {
  chatFocus: null,
  messageHistory: [],
  historyInteractions: [],
  expandFindPeople: false,
  people: []
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
    case 'EXPAND_FIND_PEOPLE': {
      return {
        ...state,
        expandFindPeople: action.expandFindPeople,
      }
    }
    case 'GET_PEOPLE': {
      return {
        ...state,
        people: action.people,
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
