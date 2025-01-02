import React, { useState, useEffect } from "react";
import "../../public/css/partials/partialResMsg.css";

const MessageDisplay = ({ iniMessage, iniMessageType, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(iniMessage || []);
  const [messageType, setMessageType] = useState(iniMessageType || "");

  useEffect(() => {
    if (message.length > 0) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  const closeMessage = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={`message-container ${messageType}`}>
      <button onClick={closeMessage} className="close-button">
        &times;
      </button>
      <div className="responseMsg">
        {message.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div className={`progress-bar ${messageType}`}></div>
    </div>
  );
};


export default MessageDisplay;
