import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portafolio from './components/Portafolio'
// 3 -
import Experience from './components/Experience'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portafolio />
      {/* 2 */}
      <Experience />
      <SocialLinks />
    </div>
  )
}

export default App
