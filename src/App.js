import React from 'react';

//==========================================

import './App.scss'
import App__header from "./components/header/App__header"
import App__nav from "./components/nav/App__nav"
import App__cases from "./components/cases/App__cases"
import App__footer from "./components/footer/App__footer"

const App = () => {
    return (
        <div>
            <App__header/>

            <App__nav/>

            <App__cases/>

            <App__footer/>
        </div>
    )
}

export default App
