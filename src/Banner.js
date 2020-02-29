import React from 'react';

const Banner = (prop) => {
  return (
     <div> 
         <h1>
    <img src={prop.image} align="left"/>
    This is the new header of my project</h1>
    </div>
    )
  }

  export default Banner;