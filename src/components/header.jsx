import React from 'react'
import '../Home.css'


const header = () => {
    return (
        <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          <div className="toggle__menu">
          <svg onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-justify white pointer"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        {show ?(
        <div className="sideNavbar">
            <ul className="sidebar d__flex">
            <li className="sideNavbar">
            <a href="#home">Home</a>
          </li>
          <li className="sideNavbar">
            <a href="#about">About</a>
          </li>
          <li className="sideNavbar">
            <a href="#services">Services</a>
          </li>
          <li className="sideNavbar">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="sideNavbar">
            <a href="#blog">Blog</a>
          </li>
          <li className="sideNavbar">
            <a href="#contact">Contact</a>
          </li>
            </ul>
        </div>
         ) : null}
    )
}

export default header
