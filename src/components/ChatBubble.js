import React from 'react'

function ChatBubble(props) {
  return (
    <div className="row my-3">
      <div className={`col-12 d-flex ${props.index % 2 === 0 ? 'justify-content-end' : '' }`}>
        <div className={props.index % 2 === 0 ? "p-3 border border-2 chat-bubble-self" : "bg-white p-3 border border-2 chat-bubble"}>
          <span>{props.message}</span> <br/>
          <p className={`text-muted text-small m-0 p-0 ${props.index % 2 === 0 ? 'text-start' : 'text-end'}`}>20:30</p>
        </div>
      </div>
    </div>
  )
}

export default ChatBubble
