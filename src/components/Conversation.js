import React from 'react'
import MessageForm from './MessageForm'
// import { Link } from 'react-router-dom'
import MessagesContainer from './MessagesContainer'


const API_MESSAGES = `http://localhost:3000/api/v1/messages`
const API_CONVOS = `http://localhost:3000/api/v1/conversations`

class Conversation extends React.Component {

    state = {
        messageFormClicked: false,
        displayMessageContainer: false,
        viewMsgsBtnClicked: false,
        text: '',
        convoMsgs: []
    }


    toggleMessageForm = () => {
        this.setState({ messageFormClicked: !this.state.messageFormClicked })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    } 

    handleMessageSubmit = event => {
        event.preventDefault()
        const { id } = this.props.convoObj
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

    getConvoMsgs = () => {
        const { convoObj } = this.props
        let convoMessages = convoObj.messages
        // console.log(convoObj)
        this.setState({ 
            convoMsgs: convoMessages,
            displayMessageContainer: !this.state.displayMessageContainer,
            viewMsgsBtnClicked: !this.state.viewMsgsBtnClicked
        })
    }

    render() {

        const { convoObj, messages, addNewThought } = this.props
        const { convoMsgs, displayMessageContainer, viewMsgsBtnClicked, messageFormClicked } = this.state

        return(
            <>
                <div>
                    {/* <h2 onClick={() => getConvoObj(convoObj, convoObj.id)}>{convoObj.title}</h2>  */}

                    {/* <Link 
                    to={`/conversations/${convoObj.id}`} 
                    key={convoObj.id}
                    // onClick={() => updateConvoObj(convoObj)}
                    ><h2>{convoObj.title}</h2>
                    </Link>  */}

                <h2>{convoObj.title}</h2><button onClick={this.getConvoMsgs}>{viewMsgsBtnClicked ?  'Close Messages' : 'View Messages'}</button>

                    <p>Start Date: {convoObj.start_date}</p>
                    {displayMessageContainer ? 
                    <MessagesContainer 
                    convoMsgs={convoMsgs} 
                    handleChange={this.handleChange} 
                    messages={messages}
                    addNewThought={addNewThought}/> : null }
                    

                </div>

                <div>
                    <button onClick={this.toggleMessageForm}>{messageFormClicked ? 'Close Message Form' : 'Create Message'}</button>
                    {this.state.messageFormClicked ? <MessageForm handleChange={this.handleChange} handleMessageSubmit={this.handleMessageSubmit} text={this.state.text}/> : null }
                </div>
                
                ***************************************************************************************************************************
            </>
        )
    }
}

export default Conversation