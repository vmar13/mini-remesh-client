import React from 'react'
import ConversationContainer from './components/ConversationContainer'
// import {
//   BrowserRouter as Router,
//   Route, 
//   Switch
// } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import MessagesContainer from './components/MessagesContainer'
import ConversationShowPage from './components/ConversationShowPage'


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
  
<div>
    <Switch>

        {/* <Route  path='/conversations/:id' render={ (routerProps) => {
          const convoId = parseInt(routerProps.match.params.id)
          return <ConversationShowPage routerProps={routerProps} convoId={convoId} />  } } /> */}

        <Route  path='/conversations/:id' render={ routerProps => <ConversationShowPage {...routerProps} /> } />
        <Route  path='/conversations' render={ (history) => <ConversationContainer  />} />
        <Route  path='/messages' render={ () => <MessagesContainer messages={messages}/>} />
        {/* <Route  path='/' render={ (history) => <ConversationContainer  />} /> */}


    </Switch>
</div>

  )
}
}

export default App
