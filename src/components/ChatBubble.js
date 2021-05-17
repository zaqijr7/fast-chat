import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

function ChatBubble(props) {
  const profile = useSelector(state => state.auth.user)
  return (
      <div className={`my-2 mx-0 d-inline-flex ${props.sender === profile.id_user ? 'justify-content-end' : '' }`}>
        <div className={props.sender === profile.id_user ? "p-3 border border-2 chat-bubble-self" : "bg-white p-3 border border-2 chat-bubble"}>
          <span>{props.message}</span> <br/>
          <p className={`text-muted text-small m-0 p-0 ${props.sender === profile.id_user ? 'text-start' : 'text-end'}`}>{moment(props.time).format('LT')}</p>
        </div>
      </div>
  )
}

export default ChatBubble
