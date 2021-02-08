import React from 'react'

const ThoughtForm = props => {

    const { handleChange, handleThoughtSubmit, text } = props
    return (
        <div>
                <form onSubmit={handleThoughtSubmit}>
                    <div>
                        <h3>Share Your Thoughts</h3>
                        <input type='text' name='text' value={text} placeholder='Provide your answer' onChange={handleChange} /><br></br>
                        <input type='submit' value='Submit'  />
                    </div>
                </form>
        </div>
    )
}

export default ThoughtForm