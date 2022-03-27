import React from 'react'

import Images from './setupTests';

function Flap(props) {
 
 return(
  <div className="cards">
  <div className="card">
     <Images imgrc ={props.imgSrc}/>
  
  <div className="card_info">
    <p>the Hotstar original</p>
    <h3> {props.imgName} </h3>

      <a href={props.imgLink} target="_blank">
          <button >click me</button>
       </a>
  
    </div>
</div>
</div>
 )

}

export default Flap;