import React from 'react'

import "./Search.css"

export const Search = (props) => {

    

    return (
        <div className="search-container">
            <input onChange={(e) => {props.search(e.currentTarget.value)}} placeholder="Search" type="text" />
        </div>
    )
}
