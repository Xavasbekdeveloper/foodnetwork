import heroBg from '../../assets/images/heroBg.png'
import React from 'react'
import { HEROBTNS } from '../../static'
import './Hero.css'

const Hero = () => {
  return (
    <section className='Hero'>
        <div className="container Hero__container">
            <div className="Hero__left">
                <h1 className='Hero__title'>Making time a good time by making food the good food.</h1>
                <p className="Hero__text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,
                </p>
                <div className="Hero__btns">
                    {
                        HEROBTNS?.map((item, index) => (
                            <button key={index} className="Hero__btn">{item.title}</button>
                        ))
                    }
                </div>
            </div>
            <div className="Hero__right">
                <img src={heroBg} alt="img" />
            </div>
        </div>
    </section>
  )
}

export default Hero