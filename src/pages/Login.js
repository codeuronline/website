import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Form from "../components/Form";

const Login = () => {
    return (
        <div className='routeur'>
            <Logo/>
            <Navigation/>
            <Form/>
        </div>
    );
};

export default Login;
