import React from 'react'
import ConversationContainer from './components/ConversationContainer'
// import {
//   BrowserRouter as Router,
//   Route, 
//   Switch
// } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router-dom'

import MessagesContainer from './components/MessagesContainer'
import ConversationShowPage from './components/ConversationShowPage'
import Conversation from './components/Conversation'


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

        <Route 
          exact path='/conversations/:id' 
          render={ (props) => {
          <ConversationShowPage 
            history={props.history}
            id={props.match.params.id} />  } } />

        {/* <Route  path='/conversations/:id' render={ routerProps => <ConversationShowPage {...routerProps} /> } /> */}
        <Route  path='/conversations' render={ () => <ConversationContainer  />} />
        <Route  path='/conversation' render={ () => <Conversation  />} />
        <Route  path='/messages' render={ () => <MessagesContainer messages={messages}/>} />
        <Route  exact path='/' render={ () => <Redirect to='/conversations' component={ConversationContainer} />} />


    </Switch>
</div>

  )
}
}

export default App
