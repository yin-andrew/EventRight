import React, { useState } from "react";


function SearchBar(props) {

    const [query, setQuery] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        props.clearEvents();
        props.searchEvents(query).then(props.history.push('/search-results'));
        // console.log("query", query);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input className="navbar-search" type="search" placeholder="Search" value={query} onChange={(e)=> setQuery(e.target.value)}/>
            </form>
        </div>
    );
}

export default SearchBar;