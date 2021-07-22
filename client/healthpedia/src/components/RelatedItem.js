
import React from 'react';

const RelatedItem = (props) => {

  // console.log(props)

  return (
    <div >

    
    <h3 className="text-warning"> {props.title} </h3>

    <div className="relateditems" dangerouslySetInnerHTML={{__html:props.content.replace(/href/g, "target='_blank' href")}}></div>

    <button className="favorites" id={`${props.id}`}>
      Favorite
    </button>

    </div>
  )
}

export default RelatedItem