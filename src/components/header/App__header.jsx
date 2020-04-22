import React from "react"

// ========================================

import s from './App__header.module.scss'
import App__illustration from "../illustration/App__illustration";
import App__logo from "../logo/App__logo";
import App__btn from "../ui/btn/App__btn";

const App__header = () => {
    return (
        <header className={ s.wrap } >
            <div className={ s.descriptions } >
                <div className={ s.logo } >
                    <App__logo/>
                </div>

                <div className={ s.content } >
                    <p className={ s.title } > Мы даем начало твоему бизнесу, мы даем успех. </p>

                    <p className={ s.description } >
                        ToUp studio - команда разработчиков, маркетологов и дизайнеров с большим опытом работы.
                    </p>

                    {/*<App__btn text='Подробнее' />*/}
                </div>
            </div>

            <div className={ s.icons } >
                <div className={ s.ellipse } >
                    <svg className={ s.svg } viewBox="0 0 692 622" fill="none">
                        <circle cx="758" cy="-136" r="758" fill="#47AF71"/>
                    </svg>

                    <svg className={ s.svg_2 } width="521" height="730" viewBox="0 0 521 730" fill="none" >
                        <circle cx="758" cy="-28" r="758" fill="#47AF71"/>
                    </svg>

                    <svg className={ s.svg_3 } width="249" height="406" viewBox="0 0 249 406" fill="none">
                        <circle cx="405.5" cy="0.5" r="405.5" fill="#47AF71"/>
                    </svg>
                </div>

                <div className={ s.illustration } >
                    <App__illustration/>
                </div>
            </div>
        </header>
    )
}

export default App__header