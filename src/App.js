import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Register from './Register';

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

        { /* Dodajte Link za povratak na početnu stranicu */ } <
        Link to = "/" >
        <
        button > Početna stranica < /button> < /
        Link >

        { /* Definišite rute za različite stranice */ } <
        Route path = "/"
        exact component = { Home }
        /> <
        Route path = "/register"
        component = { Register }
        />

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