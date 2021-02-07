import React from 'react'
import MessageForm from './MessageForm'
import { Link } from 'react-router-dom'
import MessagesContainer from './MessagesContainer'


const API_MESSAGES = `http://localhost:3000/api/v1/messages`

class Conversation extends React.Component {

    state = {
        messageFormClicked: false,
        text: ''
        // titleClicked: false
    }


    toggleMessageForm = () => {
        this.setState({ messageFormClicked: !this.state.messageFormClicked })
    }

    // toggleTitleClicked = () => {
    //     this.setState({ titleClicked: !this.state.titleClicked })
    // }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    } 

    handleMessageSubmit = event => {
        event.preventDefault()
        const { id } = this.props.eachConvo
        let datetime = new Date().toLocaleString()
        
        const newMessage = {
            conversation_id: id,
            text: this.state.text,
            date_and_time: datetime
        }

        fetch(API_MESSAGES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newMessage)
        })
        .then(res => res.json())
        .then(newMessage => {
            this.props.addNewMessage(newMessage)
        })
        .then( () => this.setState({ text: ''}))
    }

    render() {

        const { convoObj, messages } = this.props

        //If you click on a convoTitle, you should be taken to convo show page /conversations/:id
        //On that convo show page, you'd render the messages container for that single convo

        return(
            <>
                <div>
                    <Link to={`/conversations/${convoObj.id}`} ><h2>{convoObj.title}</h2></Link> 
                    <p>Start Date: {convoObj.start_date}</p>
                    {/* {this.titleClicked ? <MessagesContainer convoId={eachConvo.id}/> : null } */}
                    

                </div>

                <div>
                    <button onClick={this.toggleMessageForm}>{this.state.messageFormClicked ? 'Close Message Form' : 'Create Message'}</button>
                    {this.state.messageFormClicked ? <MessageForm handleChange={this.handleChange} handleMessageSubmit={this.handleMessageSubmit} text={this.state.text}/> : null }
                </div>
                
                ***************************************************************************************************************************
            </>
        )
    }
}

export default Conversation