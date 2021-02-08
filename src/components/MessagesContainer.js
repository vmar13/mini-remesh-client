import React from 'react'
import Message from './Message'

const MessagesContainer = props => {

    const { handleChange, addNewThought, convoMsgs, messages } = props

    return (
        <>
            <h3>Messages</h3>

            <div>
                {convoMsgs.map(convoMsg => <Message key={convoMsg.id} messages={messages} convoMsg={convoMsg} handleChange={handleChange} addNewThought={addNewThought}/>)}
            </div>
        </>
    )
}

export default MessagesContainer