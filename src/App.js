import React from 'react'
import ConversationContainer from './components/ConversationContainer'
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom'
import MessagesContainer from './components/MessagesContainer'


const API_MESSAGES = `http://localhost:3000/api/v1/messages`

class App extends React.Component {

  state = {
    messages: []
  }

  componentDidMount() {
    this.getMessages()
}

  getMessages = () => {
    fetch(API_MESSAGES)
    .then(res => res.json())
    .then(allMessages => {
        this.setState({ messages: allMessages })
    })
  }

  addNewMessage = newMessage => {
    this.setState({ messages: [...this.state.messages, newMessage]})
  }



render() {

  const { messages } = this.state
  
  return (
    <>

    <Router>

      <Route  path='/messages' render={ () => <MessagesContainer messages={messages}/>} />
      <Route  path='/' render={ () => <ConversationContainer  />} />

    </Router>
    
  </>
  )
}
}

export default App
