import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { useState } from "react"

// pages
import Main from "./assets/pages/Main"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Projects from "./assets/pages/Projects"
import Contact from "./assets/pages/Contact"

function App() {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  const closeNavMenu = () => {
    setIsActive(false)
  }

  return (
    <>
      <BrowserRouter>
        <header>
          <nav className="navbar">
            <div className="navbar-brand">
              <NavLink to="/" className="navbar-item" onClick={ closeNavMenu }>
                <h1 className="title has-text-weight-bold">
                  <span className="has-text-link-dark">D</span>alius.
                </h1>
              </NavLink>
              
              <NavLink className={`navbar-burger ${ isActive ? 'is-active' : null }`} onClick={toggleActive}>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </div>

          {/* Navigation Links */}
          <div className={`navbar-menu ${ isActive ? 'is-active' : null }`}>
            <div className="navbar-end">
              <NavLink to="home" className="navbar-item" onClick={ closeNavMenu }>Home</NavLink>
                <NavLink to="about" className="navbar-item" onClick={ closeNavMenu }>About</NavLink>
                <NavLink to="projects" className="navbar-item" onClick={ closeNavMenu }>Projects</NavLink>
                <NavLink to="contact" className="navbar-item" onClick={ closeNavMenu }>Contact Me</NavLink>
            </div>
          </div>

          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={ <Main /> } />
            <Route path="home" element={ <Home /> } />
            <Route path="about" element={ <About /> } />
            <Route path="projects" element={ <Projects />} />
            <Route path="contact" element={<Contact /> } />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
