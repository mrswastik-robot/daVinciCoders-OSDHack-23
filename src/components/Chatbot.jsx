import React from 'react'

import './Chatbot.css';

function Chatbot ()  {
  return (
    <div>
    <div className="container">
    <div id="chat-window">
      <div className="main-title">O(4) Chat-Bot</div>
      <div id="chat-messages"></div>
      
      <form id="chat-form">
        <input
          type="text"
          id="chat-input"
          autocomplete="off"
          placeholder="Type your message here"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
    </div>

    <div className="chat-btn">
      <img src="chatbot.png" alt="chat box icon btn" />
    </div>
  

  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.3/axios.min.js"></script>
  <script src="jquery-3.6.4.min.js"></script>
  <script src="script.js"></script>



    </div>
  )
}

export default Chatbot