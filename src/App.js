import React from 'react'
import ConversationContainer from './components/ConversationContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MessagesContainer from './components/MessagesContainer'


const App = () => {
  return (
    <Router>
      <Route exact path='/' component={ConversationContainer} />
      <Route exact path='/messages' component={MessagesContainer} />
    </Router>
  )

}

export default App
