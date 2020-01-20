// import react and render from reactdom
import React from 'react'
import {render} from 'react-dom'
import SearchParam from './SearchParam.js'

const App = () => {
  return ( 
      <div>    
          <h1> Search for adorable Pet for Adoption </h1>
          <SearchParam />
        </div>

  );
};

render(<App />, document.getElementById('root'));
