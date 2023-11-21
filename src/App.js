import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        header >
        <
        h1 > MSM Zaune GmbH < /h1> <
        p > Vaš partner za moderna rešenja u izradi ograda. < /p> < /
        header >

        <
        footer >
        <
        p > & copy; { new Date().getFullYear() }
        MSM Zaune GmbH.Sva prava zadržana. < /p> < /
        footer > <
        /div> < /
        Router >
    );
}

export default App;