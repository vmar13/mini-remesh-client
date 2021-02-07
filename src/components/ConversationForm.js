import React from 'react'

const ConversationForm = props => {


    const { handleChange, handleConvoSubmit, title } = props 
        return(
            <div>
                    <form onSubmit={handleConvoSubmit}>
                        <div>
                            <h3>Create a Conversation</h3>
                            <input type='text' name='title' value={title} placeholder='Title' onChange={handleChange} /><br></br>
                            <input type='submit' value='Submit'  />
                        </div>
                    </form>
            </div>
        )
    }

export default ConversationForm