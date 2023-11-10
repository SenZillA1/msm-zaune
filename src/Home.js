import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( <
        div >
        <
        h2 > Dobrodošli na početnu stranicu < /h2>

        { /* Dodajte Link za povratak na početnu stranicu */ } <
        Link to = "/" >
        <
        button > Povratak na početnu stranicu < /button> < /
        Link >

        { /* Dodajte ostale komponente i sadržaj prema potrebi */ } <
        /div>
    );
}

export default Home;