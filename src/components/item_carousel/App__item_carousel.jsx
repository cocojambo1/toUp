import React from "react"
import userIcon from '../../assets/Mask Group.jpg'

// ========================================

import s from './App__item_carousel.module.scss'

const App__itemCarousel = props => {

    const style = {
        backgroundColor: props.bg
    }

    return (
        <div className={ s.wrap } >
            <p className={ s.title } > { props.title } </p>

            <p className={ s.description } > { props.description } </p>

            <div className={ s.downBar } style={ style } >
                <img className={ s.img } src={ userIcon } alt=""/>

                <div className={ s.name } >
                    <p className={ s.name } > { props.name } </p>
                </div>
            </div>
        </div>
    )
}

export default App__itemCarousel