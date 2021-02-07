import React from 'react'

class Conversation extends React.Component {
    render() {

        const { eachConvo, handleChange } = this.props

        return(
            <>
                <div>
                    <h2>{eachConvo.title}</h2>
                    <p>Start Date: {eachConvo.start_date}</p>
                </div>

                <button >Create Message</button>
               
            </>
        )
    }
}

// onclick, toggle form to create message
//on submit, collapse messageform
//add Linkto tag to title and send to Messages container

export default Conversation