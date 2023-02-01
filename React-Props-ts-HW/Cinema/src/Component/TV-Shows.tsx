import React from 'react'

interface TVShows {
    name: string,
    movieImg : string,
    DateOfDisplay: number,
    Rating: number,
    AvailableNow:boolean
}

function TVShows(props:TVShows) {
    return (
      <div className='TVShows'>
  
          <div className='content'>
  
              <h1>{props.name}</h1>
              <img src={props.movieImg} alt=""></img>
              <h3>{props.DateOfDisplay}</h3>
              <h3>{props.Rating}</h3>
              <h3>{props.AvailableNow}</h3>
  
            </div>
                 <h3 className='arr'>{props.movieImg}</h3>
            </div>
    )

  }
  
  export default TVShows