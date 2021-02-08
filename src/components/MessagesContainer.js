import React from 'react'
import Message from './Message'

class MessagesContainer extends React.Component{

    // state = {
    //     filteredMsgs: []
    // }

    // componentDidMount(){
    //     this.filterMessages(this.props.convoId)
    // }

    // filterMessages = (id) => {
    //     let filteredMessages
    //     filteredMessages = this.props.messages.filter(message => message.conversation_id === id)
    //     this.setState({ filteredMsgs: filteredMessages})
    // }

    render() {

        const { handleChange } = this.props

        return (
            <div>
               {this.props.filteredMsgs.map(filteredMsg => <Message key={filteredMsg.id} {...filteredMsg} handleChange={handleChange} />)}
            </div>
        )
    }
}

export default MessagesContainer