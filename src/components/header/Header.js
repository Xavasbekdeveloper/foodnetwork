import logo from '../../assets/icons/logo.svg'
import React from 'react'
import "./Header.css"
import { NAVBAR } from '../../static'

const Header = () => {
  return (
    <header className='Header'>
        <nav className='Navbar'>
            <div className="container Navbar__container">
                <div className='Navbar__left'>
                    <a className='Navbar__logo' href="#">
                        <img src={logo} alt="logo img" />
                    </a>
                    <ul className='Navbar__list'>
                        {
                            NAVBAR?.map((item, index) =>(
                                <li key={index} className='Navbar__item'>
                                    <a className='Navbar__link' href="3">
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='Navbar__btns'>
                    <button className='Navbar__btn'>Booking Now</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header