import React from 'react'

const Search = (props) => {
    return (
        <form>
            <input type='text' placeholder='Search' onChange={props.handleSearch}/>
        </form>
        
    )
}

export default Search 