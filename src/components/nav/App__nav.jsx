import React, { useState } from "react"
import Carousel from '@brainhubeu/react-carousel'

//=================================

import s from './App__nav.module.scss'
import App__itemCarousel from "../item_carousel/App__item_carousel"
import App__carousel_btn from "../ui/btn/carousel_btn/App__carousel_btn"
import '@brainhubeu/react-carousel/lib/style.css'

const App__nav = () => {

    const [ value, setValue ] = useState( 0 )

    const change = val => {
        setValue( val )
    }

    const slides = [
        (
            <App__itemCarousel
                bg='#47AF71'
                name='Тоха Рязанов'
                description='Следующий блок о нас, описание нас, участники команды с аватарками и их должность и ссылка на ресурс участника команды.'
                title='Дизайнер'
            />
        ),
        (
            <App__itemCarousel
                bg='#FFCC60'
                name='Александар Гапак'
                description='Следующий блок о нас, описание нас, участники команды с аватарками и их должность и ссылка на ресурс участника команды.'
                title='It Специалист'
            />
        ),
        (
            <App__itemCarousel
                bg='#47AF71'
                name='Костя Саженов'
                description='Следующий блок о нас, описание нас, участники команды с аватарками и их должность и ссылка на ресурс участника команды.'
                title='Backend разработчик'
            />
        ),
        (
            <App__itemCarousel
                bg='#FFCC60'
                name='Тоха Рязанов'
                description='Следующий блок о нас, описание нас, участники команды с аватарками и их должность и ссылка на ресурс участника команды.'
                title='Дизайнер'
            />
        ),
        (
            <App__itemCarousel
                bg='#47AF71'
                name='Тоха Рязанов'
                description='Следующий блок о нас, описание нас, участники команды с аватарками и их должность и ссылка на ресурс участника команды.'
                title='Дизайнер'
            />
        )
    ]

    return (
        <nav className={ s.nav } >
            <p className={ s.title } > о нас </p>

            <div className='carousel' >
                    <Carousel
                        arrowLeft={ <App__carousel_btn rotate={ false } fill='#fff' bg='#46AD70' /> }
                        arrowRight={ <App__carousel_btn rotate={ true } fill='#2C2F33' bg='#FCCA5F' /> }
                        addArrowClickHandler
                        slidesPerPage={ 3 }
                        value={ value }
                        arrows
                        infinite
                        onChange={ change }
                        slides={ slides }
                    />
                </div>

            <div className='width_1270' >
                <Carousel
                    arrowLeft={ <App__carousel_btn rotate={ false } fill='#fff' bg='#46AD70' /> }
                    arrowRight={ <App__carousel_btn rotate={ true } fill='#2C2F33' bg='#FCCA5F' /> }
                    addArrowClickHandler
                    slidesPerPage={ 1 }
                    value={ value }
                    arrows
                    infinite
                    onChange={ change }
                    slides={ slides }
                />
            </div>

            <div className='width_560' >
                <Carousel
                    arrowLeft={
                        <svg className={ s.svg } width="13" height="25" viewBox="0 0 15 33" >
                            <path d="M-8.08661e-07 16.5L15 0.47853L15 32.5215L-8.08661e-07 16.5Z"/>
                        </svg>
                    }
                    arrowRight={
                        <svg className={ s.rotate + ' ' + s.svg } width="13" height="25" viewBox="0 0 15 33" >
                            <path d="M-8.08661e-07 16.5L15 0.47853L15 32.5215L-8.08661e-07 16.5Z"/>
                        </svg>
                    }
                    addArrowClickHandler
                    slidesPerPage={ 1 }
                    value={ value }
                    arrows
                    infinite
                    onChange={ change }
                    slides={ slides }
                />
            </div>
        </nav>
    )
}

export default App__nav