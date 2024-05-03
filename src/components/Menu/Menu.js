import React from 'react'
import './Menu.css'
import { MENUCARDS } from '../../static'
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

const Menu = () => {
  return (
    <section className="Menu">
        <div className="container Menu__container">
            <div className="Menu__top">
                <p className='Menu__text'>MENU</p>
                <h2 className='Menu__title'>Food Full of treaty Love</h2>
                <p className='Menu__desc'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            </div>
            <div className="Menu__cards">
                
                {
                    MENUCARDS?.map((product, id) => {
                        let res = []

                        for (let i = 0; i < product.starIcon; i++) {
                            res.push(<IoIosStar className='Menu__card__star' />)
                        }
                        for (let i = product.starIcon; i < 5; i++) {
                            res.push( <IoIosStarOutline className='Menu__card__star-outline' />)
                        }

                        return (
                            <div key={id} className="Menu__card">
                                <div className='Menu__card__img'>
                                    <img src={product.img} alt="img" />
                                </div>
                                <div className='Menu__card__info'>
                                    <div className='Menu__card__top'>
                                        <h3 className='Menu__card__title'>{product.title}</h3>
                                        <p className='Menu__card__price'>{product.price}</p>
                                    </div>
                                    <p className='Menu__card__desc'>{product.desc}</p>
                                    <div className='Menu__card__bottom'>
                                        <button className='Menu__card__plus'>{product.plusIcon}</button>
                                        <div className='Menu__card__star'>{res}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu