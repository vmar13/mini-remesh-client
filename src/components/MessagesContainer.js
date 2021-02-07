import React from 'react'
import Message from './Message'

class MessagesContainer extends React.Component{

    state = {
        filteredMsgs: []
    }

    componentDidMount(){
        this.filterMessages(this.props.convoId)
    }

    filterMessages = (id) => {
        let filteredMessages
        filteredMessages = this.props.messages.filter(message => message.conversation_id === id)
        this.setState({ filteredMsgs: filteredMessages})
    }

    render() {

        // console.log(this.props.messages)
        console.log(this.state.filteredMsgs)

        return (
            <div>
                {/* {let filteredMsgs = this.props.messages.filter(message => {
                    if(message.conversation_id === this.props.convoId){
                        this.setState({filteredMsgs: filteredMsgs})
                    } else {
                        return
                    }
                })} */}
                
            </div>
        )
    }
}

export default MessagesContainer