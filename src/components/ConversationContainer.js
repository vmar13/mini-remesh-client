import React from 'react'

const API_CONVOS = `http://localhost:3000/api/v1/conversations`

class ConversationContainer extends React.Component {

    state = {
        conversations: []
    }

    componentDidMount() {
        this.getConversations()
    }

    getConversations = () => {
        fetch(API_CONVOS)
        .then(res => res.json())
        .then(data => console.log(data))
        // .then(allConvos => {
        //     this.setState({ conversations: allConvos })
        // })
    }

    render() {
        return(
            <div>
                <p>LIST OF CONVERSATIONS GOES HERE</p>
            </div>
        )
    }
}

export default ConversationContainer