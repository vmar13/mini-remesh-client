import React from 'react'
import Thought from './Thought'

const ThoughtsContainer = props => {

    const { msgThoughts } = props

    return (
        <div>
            {msgThoughts.map(filteredTht => <Thought key={filteredTht.id} filteredTht={filteredTht} />)}
        </div>
    )
}

export default ThoughtsContainer