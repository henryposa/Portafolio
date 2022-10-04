import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portafolio from './components/Portafolio'
import Experience from './components/Experience'
// 3
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portafolio />
      <Experience />
      {/* 2 */}
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
