import React from 'react';
import ReactDom from 'react-dom';
import Flap from './App';
import './index.css';
import Cdata from './serviceWorker';





ReactDom.render(
  <> 
     <h1>Hotstar-Top 5</h1>

    {/* {Cdata.map(function newCdata(cValue){ */}
    {Cdata.map((cValue) =>{
  return (
    <Flap 
    key ={cValue.id}
    imgSrc={cValue.imgSrc}
    imgName={cValue.imgName}
    imgLink={cValue.imgLink}
   />
      )
   })
 }

  </>,
  document.getElementById('root')

);