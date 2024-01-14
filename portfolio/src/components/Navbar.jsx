import { useState } from "react"
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive)
    }

    const closeNavMenu = () => {
        setIsActive(false)
    }

    return (
        <>
        {/* move the nav from RootLayout and make it a component */}

        <nav className="navbar is-fixed-top">
                <div className="navbar-brand">
                <NavLink to="/" className="navbar-item pl-6" onClick={ closeNavMenu }>
                    <h1 className="title has-text-weight-bold">
                    <span className="has-text-danger">D</span>alius.
                    </h1>
                </NavLink>

                <NavLink className={`navbar-burger ${ isActive ? 'is-active' : null }`} onClick={toggleActive}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavLink>
                </div>

                <div className={`navbar-menu pr-6 ${ isActive ? 'is-active' : null }`}>
                    <div className="navbar-end">
                        <NavLink to="home" className="navbar-item has-text-danger" onClick={ closeNavMenu }>Home</NavLink>
                        <NavLink to="about" className="navbar-item has-text-danger" onClick={ closeNavMenu }>About</NavLink>
                        <NavLink to="projects" className="navbar-item has-text-danger" onClick={ closeNavMenu }>Projects</NavLink>
                        <NavLink to="contact" className="navbar-item has-text-danger" onClick={ closeNavMenu }>Contact Me</NavLink>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default Navbar;