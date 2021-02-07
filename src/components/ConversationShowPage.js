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
        fetch(`${API_CONVOS}/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(convo => {
            this.setState({ 
                convoObj: convo,
            })
        })
    }
    render() {

        console.log(this.props.match.params.id)
        return (
            <div>SINGLE CONVO & MESSAGES CONTAINER BELOW</div>
        )
    }
}

export default ConversationShowPage