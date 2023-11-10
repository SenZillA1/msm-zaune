import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Dodajte ovu liniju za uvoz stila

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Registracija:', { username, password });
    };

    return ( <
        div className = "Register" >
        <
        h2 > Register < /h2> <
        form >
        <
        label >
        Username:
        <
        input type = "text"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value)
        }
        /> < /
        label > <
        br / >
        <
        label >
        Password:
        <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        /> < /
        label > <
        br / >
        <
        button type = "button"
        onClick = { handleRegister } >
        Register <
        /button> < /
        form >

        { /* Dodajte Link da biste prešli na početnu stranicu */ } <
        Link to = "/" > Nazad na početnu stranicu < /Link> < /
        div >
    );
};

export default Register;