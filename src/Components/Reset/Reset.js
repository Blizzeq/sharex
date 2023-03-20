import React from 'react';
import './Reset.css';
import bg from '../../Assets/Reset/Graphic Side.svg';
import logo from '../../Assets/Reset/Logo.svg';
import frame from '../../Assets/Reset/Frame 453.svg';
import {LinkContainer} from "react-router-bootstrap";

const Reset = () => {
    return (
        <div className={'reset Regular'}>
            <div className={'w-full h-screen flex justify-center items-center'}>
                <div className={'w-6/12'}>
                    <div className={'flex items-center mb-10'}>
                        <img src={frame} alt={'logo'} className={'logo-sm'}/>
                        <p className={'text-3xl pl-2'}>Share X</p>
                    </div>
                    <p className={'SemiBold text-3xl flex justify-center mb-4'}>Reset Password</p>
                    <p className={'text-gray flex justify-center mb-4 text-center'}>Enter your email address and we’ll
                        send you an email with instructions to reset your password</p>
                    <p className={'text-gray2 mb-2'}>Email</p>
                    <input type="text" className={'border border-blue rounded h-8 px-2 w-full mb-6'}/>
                    <div className={'flex justify-center'}>
                        <LinkContainer to={'/'}>
                            <button className={'bg-blue text-white rounded h-10 w-4/12'}>Reset</button>
                        </LinkContainer>
                    </div>
                </div>
            </div>
            <div className={'flex justify-center items-center h-screen w-full'}>
                <div className={'w-max text-5xl text-shadow text-white z-10'}>
                    <p>Share your files</p>
                    <p>with ease on <span className={'SemiBold'}>Share X</span></p>
                </div>
            </div>
            <div>
                <img src={bg} alt={'bg'} className={'absolute top-0 left-1/2 h-screen w-1/2 object-cover'}/>
            </div>
            <div>
                <img src={logo} alt={'logo'} className={'absolute -top-10 -left-10'}/>
            </div>
        </div>
    );
};

export default Reset;
