import React from 'react'
import MessageForm from './MessageForm'

class Conversation extends React.Component {

    state = {
        messageFormClicked: false
    }

    toggleMessageForm = () => {
        this.setState({ messageFormClicked: !this.state.messageFormClicked })
    }

    render() {

        const { eachConvo, handleChange } = this.props

        return(
            <>
                <div>
                    <h2>{eachConvo.title}</h2>
                    <p>Start Date: {eachConvo.start_date}</p>
                </div>

                <div>
                    <button onClick={this.toggleMessageForm}>{this.state.messageFormClicked ? 'Close Message Form' : 'Create Message'}</button>
                    {this.state.messageFormClicked ? <MessageForm handleChange={handleChange}/> : null }
                </div>
                
                ***************************************************************************************************************************
            </>
        )
    }
}

// onclick, toggle form to create message
//on submit, collapse messageform
//add Linkto tag to title and send to Messages container

export default Conversation