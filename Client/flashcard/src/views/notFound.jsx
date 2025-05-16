import React, { useEffect } from 'react'
import "../public/css/notfound.css";

const NotFound = () => {

  useEffect(() => {

    document.title = 'Not Found | Flashcard Learning'

  }, [])

  return (
    <div className='notfound'>
        <p>404 Not Found </p>
        <div>
            <a href="/">
                Home
            </a>
        </div>
    </div>
  )
}

export default NotFound