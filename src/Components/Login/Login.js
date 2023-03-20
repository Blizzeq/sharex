import React from 'react';
import './Login.css';
import bg from '../../Assets/Login/Graphic Side.svg';

const Login = () => {
    return (
        <div className={'login Regular'}>
            <div className={'h-screen w-full'}>

            </div>
            <div className={'h-screen w-full'}>
                <img src={bg} alt={'bg'} className={'h-screen w-full object-cover'}/>
            </div>
        </div>
    );
};

export default Login;
