import React from 'react'
import Thought from './Thought'

const ThoughtsContainer = props => {

    const { filteredThoughts } = props

    return (
        <div>
            {filteredThoughts.map(filteredTht => <Thought key={filteredTht.id} filteredTht={filteredTht} />)}
        </div>
    )
}

export default ThoughtsContainer