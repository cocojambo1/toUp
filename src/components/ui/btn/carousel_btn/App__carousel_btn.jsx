import React from "react"

//========================================

import s from './App__carousel_btn.module.scss'

const App__carousel_btn = props => {

    const style_1 = {
        backgroundColor: props.bg
    }

    const style_2 = {
        fill: props.fill
    }

    return (
        <div style={ style_1 } className={ props.rotate ? s.right : s.left } >
            <svg style={ style_2 } className={ s.svg } width="15" height="33" viewBox="0 0 15 33" >
                <path d="M-8.08661e-07 16.5L15 0.47853L15 32.5215L-8.08661e-07 16.5Z"/>
            </svg>
        </div>
    )
}

export default App__carousel_btn