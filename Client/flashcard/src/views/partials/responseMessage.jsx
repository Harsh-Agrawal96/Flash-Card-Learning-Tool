import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../../public/css/partials/partialResMsg.css"


const MessageDisplay = () => {
    
    const location = useLocation();
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState([]);
    const [messageType, setMessageType] = useState('');

    useEffect(() => {
        if (location.state?.message) {
            setMessage(location.state.message);
            setMessageType(location.state.type);
            console.log("here")
            console.log(message);
            console.log("lsllsl")
            console.log(message.length)
            message.map((i) => {
                console.log(i);
            })
            setVisible(true);

            // const timer = setTimeout(() => {
            //     setVisible(false);
            // }, 3000);

            // return () => clearTimeout(timer);
        }
    }, [location.state]);

    const closeMessage = () => setVisible(false);

    return (
        <>
            {visible && (
                <div className={`message-container ${messageType}`}>
                    <button onClick={closeMessage} className="close-button">
                        &times;
                    </button>
                    <div className='responseMsg' >
                        { message.length > 0 && message.map((i) => {
                            <p>{i}</p>
                        })}
                    </div>
                    <div className={`progress-bar ${messageType}`}></div>
                </div>
            )}
        </>
    );
};


export default MessageDisplay;
