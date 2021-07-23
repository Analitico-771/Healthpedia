
import React from 'react';

const RelatedItem = (props) => {

  // console.log(props)

  return (
    <div >
      <br />
      <h3 className="text-warning"> {props.title} {'\u00A0'}</h3>
      
      <br />

      <div className="relateditems" dangerouslySetInnerHTML={{__html:props.content.replace(/href/g, "target='_blank' href")}}></div>

    </div>
  )
}

export default RelatedItem