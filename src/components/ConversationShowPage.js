import React from 'react'

const API_CONVOS = `http://localhost:3000/api/v1/conversations`

class ConversationShowPage extends React.Component{
    // _isMounted = false

    // state = {
    //     conversationObj: {},
    //     isLoading: true

    // }
    
    // getConvoObj = () => {
    //     fetch(`${API_CONVOS}/${this.props.id}`)
    //     .then(res => res.json())
    //     .then(convo => {
    //             // console.log(convo)
    //         if(this._isMounted){
    //             this.setState({ 
    //             conversationObj: convo,
    //             isLoading: false
    //         })
    //         }
           
    //     })
    // }

    // componentDidMount(){ 
    //     this._isMounted = true
    //     this.getConvoObj()
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.id !== this.props.id){
    //         this.getConvoObj()
    //         this._isMounted = true
    //     } else {
    //       return
    //     }
    //   }
  
    // componentWillUnmount() {
    //     this._isMounted = false
    // }

    render() {
        // console.log(this.props.id)

        return (
            <>
            <div>SINGLE CONVO & MESSAGES CONTAINER BELOW</div>
            <p>{this.props.conversationObj.title}</p>
            </>
        )
    }
}

export default ConversationShowPage