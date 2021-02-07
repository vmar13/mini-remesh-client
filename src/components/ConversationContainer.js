import React from 'react'
import Search from './Search'
import Conversation from './Conversation'
import ConversationForm from './ConversationForm'


const API_CONVOS = `http://localhost:3000/api/v1/conversations`

class ConversationContainer extends React.Component {

    state = {
        conversations: [],
        searchTerm: '',
        title: ''
    }

    componentDidMount() {
        this.getConversations()
    }

    getConversations = () => {
        fetch(API_CONVOS)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(allConvos => {
            this.setState({ conversations: allConvos })
        })
    }

    addNewConvo = newConvo => { 
        this.setState({
          conversations: [...this.state.conversations, newConvo]
        })
      }

    handleSearch = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
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
                handleSubmit={this.handleSubmit}
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
                    />
                )}
                
            </>
        )
    }
}

export default ConversationContainer