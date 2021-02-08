import React from 'react'
import ConversationContainer from './components/ConversationContainer'
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'

import MessagesContainer from './components/MessagesContainer'
import ConversationShowPage from './components/ConversationShowPage'
import Conversation from './components/Conversation'


const API_MESSAGES = `http://localhost:3000/api/v1/messages`
const API_CONVOS = `http://localhost:3000/api/v1/conversations`
const API_THOUGHTS = `http://localhost:3000/api/v1/thoughts`


class App extends React.Component {

  state = {
    messages: [],
    thoughts: []
  }

  componentDidMount() {
    this.getMessages()
    this.getThoughts()
}

  getMessages = () => {
    fetch(API_MESSAGES)
    .then(res => res.json())
    .then(allMessages => {
        this.setState({ messages: allMessages })
    })
  }

  getThoughts = () => {
    fetch(API_THOUGHTS)
    .then(res => res.json())
    .then(allThoughts => {
        this.setState({ thoughts: allThoughts })
    })
  }

  addNewMessage = newMessage => {
    this.setState({ messages: [...this.state.messages, newMessage]})
  }

  addNewThought = newThought => {
    this.setState({ thoughts: [...this.state.thoughts, newThought]})
  }
//   getConvoObj = (id) => {
//     fetch(`${API_CONVOS}/${id}`)
//     .then(res => res.json())
//     .then(convo => {
//             console.log(convo)
//             // this.props.history.push('/conversations/${id}')
//         // this.setState({ 
//         //     conversationObj: convo,
//         // })
//     })
// }

  // getConvoObj = (convo, id) => {
  //   this.setState({ conversationObj: convo })
  //   this.props.history.push('/conversations/${id}')
  // }

//   getConvoObj = () => {
//     fetch(`${API_CONVOS}/${this.props.id}`)
//     .then(res => res.json())
//     .then(convo => {
//             console.log(convo)
        
//         // this.setState({ 
//         //     conversationObj: convo,
//         // })
//     })
// }


render() {

  const { messages, thoughts } = this.state
  
  return (
  

  <Router>
    <Switch>

        <Route 
          path='/conversations/:id' 
          render={ (props) => {
          <ConversationShowPage 
            history={props.history}
            id={props.match.params.id}
            {...props}
             />  } } />

        <Route  path='/conversations' render={ () => <ConversationContainer addNewMessage={this.addNewMessage} addNewThought={this.addNewThought} />} />
        <Route  path='/conversation' render={ () => <Conversation  />} />
        <Route  path='/messages' render={ () => <MessagesContainer messages={messages} thoughts={thoughts} />} />
        <Route  path='/' render={ () => <Redirect to='/conversations' component={ConversationContainer} />} />


    </Switch>
    </Router>


  )
}
}

export default App
