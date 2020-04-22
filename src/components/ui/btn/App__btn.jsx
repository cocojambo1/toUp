import React from "react"

//====================================

import s from './App__btn.module.scss'

const App__btn = props => {
    return (
        <div className={ s.wrap } >
            <div className={ s.bg_1 } />

            <div className={ s.bg_2 } >
                <p className={ s.text } > { props.text } </p>

                <svg width="231" height="58" viewBox="0 0 231 58" fill="none">
                    <path d="M0 58V0H230.59V26C210.5 26 197 44.5 197 58H0Z" fill="#47AF71"/>
                </svg>
            </div>
        </div>
    )
}

export default App__btn