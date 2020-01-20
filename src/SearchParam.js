import React from 'react'

const SearchParam = ()=> {
    const location = 'Lenexa, Kansas'

    return (
        <div className = 'search-param'>
            <form> 
                 <label htmlFor = 'location'>
                 Location
                 </label>
                 <input id= 'location' type= 'text' value = {location} placeholder = 'Location'/>
                 <button> Submit</button>
            </form>
        </div>
    );
    };

    export default SearchParam