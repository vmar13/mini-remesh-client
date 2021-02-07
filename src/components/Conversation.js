import React from 'react'
import MessageForm from './MessageForm'
import { Link } from 'react-router-dom'
import MessagesContainer from './MessagesContainer'


const API_MESSAGES = `http://localhost:3000/api/v1/messages`

class Conversation extends React.Component {

    state = {
        messageFormClicked: false,
        text: '',
        titleClicked: false
    }

    // componentDidMount(){
    //     this.filterMessages(this.props.eachConvo.id)
    // }

    // filterMessages = (id) => {
    //     let filteredMessages
    //     filteredMessages = this.props.messages.filter(message => {
    //         if(message.conversation_id === id){
    //             this.setState({ filteredMsgs: filteredMessages})
    //         } else {
    //             return 
    //         }
    //     })
    // }

    // filterMessages = () => {
    //     let filteredMessages = this.props.messages.filter(message => {
    //         message.conversation_id === this.props.eachConvo.id
    //         this.setState({ filteredMsgs: filteredMessages})

    //     })

    // }

    toggleMessageForm = () => {
        this.setState({ messageFormClicked: !this.state.messageFormClicked })
    }

    toggleTitleClicked = () => {
        this.setState({ titleClicked: !this.state.titleClicked })
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


    // filterMessages = () => {
    //     const { id } = this.props.eachConvo
    //     let filteredMessages
    //     filteredMessages = this.props.messages.filter(message => {
    //         if(message.conversation_id === id){
    //             return filteredMessages
    //         } else {
    //             return null
    //         }
    //     })
    //     this.setState({ filteredMsgs: filteredMessages})
    // }


    // filterMessages = (id) => {
    //     // const { id } = this.props.eachConvo
    //     let filteredMessages
    //     filteredMessages = this.props.messages.filter(message => {
    //         if(message.conversation_id === id){
    //             return filteredMessages
    //         } else {
    //             return null
    //         }
    //     })
    //     this.setState({ filteredMsgs: filteredMessages})
    // }

    render() {

        const { eachConvo, messages } = this.props
        // console.log(this.state.filteredMsgs)
        // let datetime = new Date().toLocaleString()
        // console.log(datetime)
        console.log(messages)
        // console.log(eachConvo.id)
        // console.log(this.state.filteredMsgs)

        return(
            <>
                <div>
                    <Link to='/messages' ><h2 onClick={this.toggleTitleClicked}>{eachConvo.title}</h2></Link> 
                    <p>Start Date: {eachConvo.start_date}</p>
                    {this.titleClicked ? <MessagesContainer id={eachConvo.id} messages={messages} /> : null }
                    

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