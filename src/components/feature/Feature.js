import React from 'react'
import { FEATURESCARDS } from '../../static'
import './Feature.css'

const Feature = () => {
  return (
    <section className="Feature">
        <div className="container Feature__cotnainer">
            <p className='Feature__text'>FEATURES</p>
            <h2 className="Feature__title">Food with a New Passion</h2>
            <div className="Feature__cards">
                {
                    FEATURESCARDS?.map((item, id) => {
                        return (
                            <div key={id} className="Feature__card">
                                <img className='Feature__card__img' src={item.img} alt="img" />
                                <h3 className='Feature__card__title'>{item.title}</h3>
                                <p className='Feature__card__text'>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Feature