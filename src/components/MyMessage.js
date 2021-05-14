import React from 'react'

export default function MyMessage({ message }) {
    /*image */
    if (message?.attachments?.lenght > 0) {
        return(
            <img src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float:'right'}}/>
        )
    }
    return (
        <div className="message" style={{floar:'right', marginRight: '18px', color:'white', backgroundColor:'#3B2A50'}}>
            {/*display image */}
            {message.text}
        </div>
    )
}
