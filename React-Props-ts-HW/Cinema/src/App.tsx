import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Component/Footer'
import Nav from './Component/Nav'
import Movies from './Component/Movies'
import TVShows from './Component/TV-Shows'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <div className="cardsOf">
        <Movies
          name={"3"}
          movieImg={""}
          DateOfDisplay={3}
          Rating={5}
          AvailableNow={true}
        />
        <Movies
          name={"a"}
          movieImg={"a"}
          DateOfDisplay={3}
          Rating={5}
          AvailableNow={true}
        />
        <Movies
          name={""}
          movieImg={""}
          DateOfDisplay={3}
          Rating={5}
          AvailableNow={true}
        />
      </div>
      <div className="cardsOf">
        <TVShows
          name={""}
          movieImg={""}
          DateOfDisplay={3}
          Rating={5}
          AvailableNow={true}
        />
        <TVShows
          name={""}
          movieImg={""}
          DateOfDisplay={3}
          Rating={5}
          AvailableNow={true}
        />
        <TVShows
          name={""}
          movieImg={""}
          DateOfDisplay={3}
          Rating={5}
          AvailableNow={true}
        />
      </div>


      <Footer/>
    </div>
  )
}

export default App
