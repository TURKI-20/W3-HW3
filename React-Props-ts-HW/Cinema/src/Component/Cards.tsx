import React from 'react' 


interface Cards{
title: string;
text: string;
image: string;


}


function Cards(props:Cards) {
return (
  <div className="card">
      <h1>{props.title}</h1>
      <img src={props.image} alt="" width="100"></img>
      <p>{props.text}</p>      
     </div>
)
}

export default Cards;