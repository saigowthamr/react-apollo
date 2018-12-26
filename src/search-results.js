import React from 'react';


function SearchResults(props) {

    const { data } = props

    function renderResults() {
        if (!data.search.nodes.length) {
            return <p>No results found</p>
        } else {
            return data.search.nodes.map(({ name, id, stargazers }) => (
                < ul key={id} >
                    <li> {"  ⭐"} {stargazers.totalCount} - {name}</li>
                </ul>
            ))
        }

    }
    return renderResults()
}


export default SearchResults;