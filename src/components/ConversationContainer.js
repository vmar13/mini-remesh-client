import React from 'react'
import Search from './Search'
import Conversation from './Conversation'


const API_CONVOS = `http://localhost:3000/api/v1/conversations`

class ConversationContainer extends React.Component {

    state = {
        conversations: [],
        searchTerm: ''
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

    handleSearch = event => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {

        const { conversations, searchTerm } = this.state
        const searchedConvos = conversations.filter(convo => convo.title.includes(searchTerm))

        return(
            <>
                <Search handleSearch={this.handleSearch}/>
                
                {searchedConvos.map(eachConvo => 
                    <Conversation key={eachConvo.id} eachConvo={eachConvo} />
                )}
                
            </>
        )
    }
}

export default ConversationContainer