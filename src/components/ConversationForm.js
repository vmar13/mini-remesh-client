import React from 'react'

const ConversationForm = (props) => {



    const { handleChange, handleSubmit, title } = props 
        return(
            <div>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <h3>Create a Conversation</h3>
                            <input type='text' name='title' value={title} placeholder='Title' onChange={handleChange} /><br></br>
                            {/* <input type='hidden' value={startDate} /><br></br> */}
                            <input type='submit' value='Submit'  />
                        </div>
                    </form>
            </div>
        )
    }

export default ConversationForm