import React from 'react'

class Conversation extends React.Component {
    render() {

        const { eachConvo } = this.props

        return(
            <div>
                <h2>{eachConvo.title}</h2>
                <p>{eachConvo.start_date}</p>
            </div>
        )
    }
}

export default Conversation