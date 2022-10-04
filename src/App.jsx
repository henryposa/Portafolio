import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
// 2 -
import About from './components/About'
// 7 -
import Portafolio from './components/Portafolio'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* 3 -*/}
      <About />
      {/* 6 -*/}
      <Portafolio />
      <SocialLinks />
    </div>
  )
}

export default App
