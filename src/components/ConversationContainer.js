import React from 'react'
import Search from './Search'
import Conversation from './Conversation'
import ConversationForm from './ConversationForm'


const API_CONVOS = `http://localhost:3000/api/v1/conversations`
const API_MESSAGES = `http://localhost:3000/api/v1/messages`


class ConversationContainer extends React.Component {

    state = {
        conversations: [],
        searchTerm: '',
        title: '',
        messages: []
     
    }

    componentDidMount() {
        this.getConversations()
        this.getMessages()
    }

    getConversations = () => {
        fetch(API_CONVOS)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(allConvos => {
            this.setState({ conversations: allConvos })
        })
    }

    getMessages = () => {
        fetch(API_MESSAGES)
        .then(res => res.json())
        .then(allMessages => {
            this.setState({ messages: allMessages })
        })
    }

    addNewConvo = newConvo => { 
        this.setState({ conversations: [...this.state.conversations, newConvo]})
      }

    addNewMessage = newMessage => {
        this.setState({ messages: [...this.state.messages, newMessage]})
    }

    handleSearch = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleConvoSubmit = event => {
        event.preventDefault()
        let getDate = new Date().toLocaleDateString("en-US")
        let reversedDate = getDate.split('/').reverse()
        let year = reversedDate.shift()
        let yearOnEnd = [...reversedDate, year]
        let finalDate = yearOnEnd.join('/')

        const newConvo = {
            title: this.state.title,
            start_date: finalDate
        }

        fetch(API_CONVOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newConvo)
        })
        .then(res => res.json())
        .then(newConvo => {
            this.addNewConvo(newConvo)
        })
        .then( () => this.setState({ title: '' }))
    }


    render() {

        const { conversations, searchTerm, title } = this.state
        const searchedConvos = conversations.filter(convo => convo.title.includes(searchTerm))
       
     
        return(
            <>
                {/*This component creates a conversation */}       
                <ConversationForm 
                handleChange={this.handleChange} 
                handleConvoSubmit={this.handleConvoSubmit}
                title={title} />
                <br/><br/>

                {/*This is the search bar. */}       
                <Search handleSearch={this.handleSearch}/>
                
                {/*This is each individual conversation component. */}       
                {searchedConvos.map(eachConvo => 
                    <Conversation 
                    key={eachConvo.id} 
                    eachConvo={eachConvo} 
                    handleChange={this.handleChange} 
                    addNewMessage={this.addNewMessage}
                    />
                )}
                
            </>
        )
    }
}

export default ConversationContainer