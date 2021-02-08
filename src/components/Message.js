import React from 'react'
import ThoughtForm from './ThoughtForm'

const API_THOUGHTS = `http://localhost:3000/api/v1/thoughts`


class Message extends React.Component{
    
    state = {
        text: '',
        thoughtFormClicked: false
    }

    toggleThoughtForm = () => {
        this.setState({ thoughtFormClicked: !this.state.thoughtFormClicked })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleThoughtSubmit = event => {
        event.preventDefault()
        const { id } = this.props
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
            // console.log(newThought)
            this.props.addNewThought(newThought)
        })
        .then( () => this.setState({ text: ''}))
    }
    
    render() {

        const { thoughtFormClicked } = this.state
        const { text } = this.props
        // console.log(this.props.filteredMsg)

        return(
            <>
                <div>
                    {text}<button onClick={this.toggleThoughtForm}>{this.state.thoughtFormClicked ? 'Close Thought Form' : 'Create Thought'}</button>
                    {thoughtFormClicked ? <ThoughtForm handleChange={this.handleChange} handleThoughtSubmit={this.handleThoughtSubmit} text={this.state.text}/> : null }
                </div>
                <div>
             
                </div>
            </>
        )
    }
}

export default Message