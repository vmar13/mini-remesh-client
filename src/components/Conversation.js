import React from 'react'
import MessageForm from './MessageForm'
import { Link } from 'react-router-dom'
import MessagesContainer from './MessagesContainer'


const API_MESSAGES = `http://localhost:3000/api/v1/messages`

class Conversation extends React.Component {

    state = {
        messageFormClicked: false,
        text: ''
    }

    toggleMessageForm = () => {
        this.setState({ messageFormClicked: !this.state.messageFormClicked })
    }

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

        const { eachConvo } = this.props
        // let datetime = new Date().toLocaleString()
        // console.log(datetime)
        // console.log(this.props.eachConvo.id)

        return(
            <>
                <div>
                    
                {/* <Link to='/messages' component={MessagesContainer}>{eachConvo.title}</Link> */}
                {/* <h2 <Link to='/messages' ></h2>>{eachConvo.title}</Link></h2> */}
                    <p>Start Date: {eachConvo.start_date}</p>
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

// onclick, toggle form to create message
//on submit, collapse messageform
//add Linkto tag to title and send to Messages container

export default Conversation