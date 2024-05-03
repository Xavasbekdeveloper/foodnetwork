import aboutBg from '../../assets/images/aboutBg.png'
import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="About">
        <div className="container About__container">
            <div className='About__left'>
                <img src={aboutBg} alt="img" />
            </div>
            <div className="About__right">
                <p className="About__text">About US</p>
                <h2 className="About__title">Food Stalls with Persons but  to  Product marketing plane
                catlogues etc to. </h2>
                <p className='About__desc'>There are many things are needed to start the Fast Food  Business. You need not only Just Food Stalls with Persons but also 
                equipment  make your marketing plane Effective.</p>    
                <div>
                    <button className='About__btn'>Read More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About