// src/components/Chat.js

import React, { useState } from 'react';
import './styles/ChatBox.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = { text: newMessage, sender: 'You' };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setNewMessage('');

    setTimeout(() => {
      const response = "Ok. Thanks for letting me know";
      const updatedMessagesWithBot = [...updatedMessages, { text: response, sender: 'John' }];
      setMessages(updatedMessagesWithBot);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat">
        <div className="chat-header">
          <span>John</span>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender.toLowerCase()}`}>
              <span className="message-sender">{message.sender}:</span> {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
