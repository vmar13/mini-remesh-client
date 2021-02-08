import React from 'react'

class Message extends React.Component{
    render() {

        const { text } = this.props

        return(
            <div>
                {text}
            </div>
        )
    }
    }

export default Message