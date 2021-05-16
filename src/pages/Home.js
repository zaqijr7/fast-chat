import React from 'react'

// <-------- import components ---------->
import NavberLeft from '../components/NavberLeft'
import ListChat from '../components/ListChat'
import NavbarChatRoom from '../components/NavbarChatRoom'
import ChatBubble from '../components/ChatBubble'

function Home() {
  return (
    <div className="row m-0 p-0 vh-100">
      <div className="d-none d-xl-block col-xl-4">
        <div className="row">
          <NavberLeft />
        </div>
        <div className="row overflow-auto area-list-chat">
          {
            [...Array(100)].map((item, index) => {
              return (
                <ListChat name="Jajang" lastMessage="Ada apa skufisuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhly?" time="20:30" />
              )
            })
          }
        </div>
      </div>
      <div className="col-xl-8 chat-room position-relative m-0">
        <div className="row">
          <NavbarChatRoom />
        </div>
        <div className="row chat-area pb-4">
          {[...Array(40)].map((item, index) => {
            return (
              <ChatBubble index={index} message="ssssssssssssssssslhslhkddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfbfffdf" />
            )
          })}
        </div>
        <div className="row">
          <div className="col-12 position-absolute type-chat-area py-3">
            <div className="row m-0 p-0">
              <div class="input-group-lg d-flex flex-row align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
                <input type="text" className="form-control rounded-pill mx-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cursor btn-send" viewBox="0 0 16 16">
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home