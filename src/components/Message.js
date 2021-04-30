import React from 'react'
import ThoughtForm from './ThoughtForm'
import ThoughtsContainer from './ThoughtsContainer'

const API_THOUGHTS = `http://localhost:3000/api/v1/thoughts`


class Message extends React.Component{
    
    state = {
        text: '',
        thoughtFormClicked: false,
        viewThoughtsBtnClicked: false,
        msgThoughts: []
    }

    toggleThoughtForm = () => {
        this.setState({ thoughtFormClicked: !this.state.thoughtFormClicked })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleThoughtSubmit = event => {
        event.preventDefault()
        const { id } = this.props.convoMsg
        let datetime = new Date().toLocaleString()
        
        const newThought = {
            message_id: id,
            text: this.state.text,
            date_and_time: datetime
        }

        fetch(API_THOUGHTS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newThought)
        })
        .then(res => res.json())
        .then(newThought => {
            this.props.addNewThought(newThought)
        })
        .then( () => this.setState({ text: ''}))
    }


    getMsgThoughts = (msgsArr) => {
        const { id } = this.props.convoMsg
        let messageThoughts
        let filteredMsgThts = []
        
        messageThoughts = msgsArr.map(msgAoA => msgAoA.thoughts.map(thoughtArr => thoughtArr))

        for(let arrOfArr of messageThoughts){
            for(let thoughtObj of arrOfArr){
                // console.log(thoughtObj)
                if(thoughtObj.message_id === id){
                    filteredMsgThts.push(thoughtObj)
                }
                this.setState({ 
                    msgThoughts: filteredMsgThts,
                    viewThoughtsBtnClicked: !this.state.viewThoughtsBtnClicked 
                })
            }
        }
       
    }


    
    render() {

        const { thoughtFormClicked, viewThoughtsBtnClicked, msgThoughts } = this.state
        const { text } = this.props.convoMsg
        // console.log(this.state.msgThoughts)
    

        return(
            <>
                <div>
                    {text}<button onClick={this.toggleThoughtForm}>{this.state.thoughtFormClicked ? 'Close Thought Form' : 'Create Thought'}</button>
                    {thoughtFormClicked ? <ThoughtForm handleChange={this.handleChange} handleThoughtSubmit={this.handleThoughtSubmit} text={this.state.text}/> : null }
                    <button onClick={() => this.getMsgThoughts(this.props.messages)}>View Thoughts</button>

                    {viewThoughtsBtnClicked ? 
                    <ThoughtsContainer 
                    msgThoughts={msgThoughts}
                    /> : null }
                </div>
               
            </>
        )
    }
}

export default Message