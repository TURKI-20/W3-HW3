import React from 'react'

interface Movies {
    name?: string,
    movieImg ?: string,
    DateOfDisplay?: number,
    Rating?: number,
    AvailableNow?:boolean
}

function Movies(props:Movies) {
    return (
      <div className='Movies'>
  
          <div className='content'>
            
              <h1>{props.name}</h1>
              <img src={props.movieImg} alt=""></img>
              <h3>{props.DateOfDisplay}</h3>
              <h3>{props.Rating}</h3>
              <h3>{props.AvailableNow?"Available " :"coming soon "}</h3>
            
            </div>
            </div>
            
    )



  }

  
  export default Movies




