import React from 'react'
import Message from './Message'

class MessagesContainer extends React.Component{

    state = {
        filteredMsgs: []
    }

    // componentDidMount(){
    //     this.filterMessages(this.props.id)
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

    render() {

        console.log(this.props.messages)

        return (
            <div>
                {/* {this.props.filteredMsgs.map(eachMessage => 
                    <Message 
                    key={eachMessage.id} 
                    addNewMessage={this.addNewMessage}
                    />
                )} */}
                MESSAGES CONTAINER
                
            </div>
        )
    }
}

export default MessagesContainer