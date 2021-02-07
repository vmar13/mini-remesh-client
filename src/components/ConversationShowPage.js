import React from 'react'

const API_CONVOS = `http://localhost:3000/api/v1/conversations`

class ConversationShowPage extends React.Component{

    state = {
        conversationObj: {}
    }

    componentDidMount(){
        this.getConvoObj()
    }

    getConvoObj = () => {
        fetch(`${API_CONVOS}/${this.props.id}`)
        .then(res => res.json())
        .then(convo => {
            this.setState({ 
                conversationObj: convo,
            })
        })
    }
    render() {

        return (
            <>
            <div>SINGLE CONVO & MESSAGES CONTAINER BELOW</div>
            <p>{this.state.conversationObj.id}</p>
            </>
        )
    }
}

export default ConversationShowPage