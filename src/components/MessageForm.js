import React from 'react'

const MessageForm = props => {

    const { handleChange, handleSubmit, text } = props
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <div >
                        <h3>Enter your message</h3>
                        <input type='text' name='text' value={text} placeholder='Ask a question.' onChange={handleChange} /><br></br>
                        <input type='submit' value='Submit'  />
                    </div>
                </form>
        </div>
    )
}

export default MessageForm