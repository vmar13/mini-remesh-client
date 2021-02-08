import React from 'react'

const Thought = props => {

    const { filteredTht } = props
    return (
        <div>
            {filteredTht.text}
        </div>
    )
}

export default Thought