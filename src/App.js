import React from 'react'
import ConversationContainer from './components/ConversationContainer'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import MessagesContainer from './components/MessagesContainer'


const App = () => {


  
  return (
    <>
    <Router>
    <Switch>
      <Route  path='/messages' render={ () => <MessagesContainer />} />
      <Route  path='/' render={ () => <ConversationContainer />} />

    </Switch>
    </Router>
    
  </>
  )
}

export default App
