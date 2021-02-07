import React from 'react'
import ConversationContainer from './components/ConversationContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MessagesContainer from './components/MessagesContainer'


class App extends React.Component {



  render() {

  
  return (
    <>
   
    <Router>
      <Route  path='/messages' render={ () => <MessagesContainer />} />
      <Route  path='/' render={ () => <ConversationContainer />} />

    </Router>
    
  </>
  )
}
}

export default App
