
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//testing font awesome

const App = (props) => {
  return (
    
    <div className="d-flex flex-column justify-content-center align-items-center">
      
      <h1 className="text-white">
       Welcome to Healthpedia
      </h1>

      <br/>

      <h3 className="text-warning">

       Testing Font Awesome

       {'\u00A0'} {'\u00A0'}

       <button className="favorites" >Favorite</button>
       
       {'\u00A0'} {'\u00A0'} 
       
       <FontAwesomeIcon className="favorites" icon="faStar" />

      </h3>

      <h5 className="text-info">
        
        This is a place holder text for content
        
      </h5>
      
    </div>
   
  )
}

export default App
