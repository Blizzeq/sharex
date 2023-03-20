import React from 'react';
import './Register.css';
import logo from "../../Assets/Login/Icon1.svg";
import google from "../../Assets/Login/Gmail.svg";
import facebook from "../../Assets/Login/Facebook.svg";
import instagram from "../../Assets/Login/Instagram.svg";
import linkedin from "../../Assets/Login/Linkedin.svg";
import graphic from "../../Assets/Register/Graphic Side.svg";
import logo2 from "../../Assets/Register/Logo.svg";

const Register = () => {
    return (
        <div className={'register Regular'}>
            <div className={'flex justify-center items-center h-screen w-full'}>
                <div className={'w-max text-5xl text-shadow text-white z-10'}>
                    <p>Share your files</p>
                    <p>with ease on <span className={'SemiBold'}>Share X</span></p>
                </div>
            </div>
            <div className={'flex justify-center items-center h-screen w-full'}>
                <div className={'w-6/12'}>
                    <div className={'flex items-center mb-10'}>
                        <img src={logo} alt={'logo'} className={'logo-sm'}/>
                        <p className={'text-3xl pl-2'}>Share X</p>
                    </div>
                    <p className={'SemiBold text-3xl flex justify-center mb-4'}>Sign In</p>
                    <p className={'text-gray flex justify-center mb-4'}>Create your Share X account</p>
                    <div className={'flex justify-center mb-4'}>
                        <div className={'mr-5'}>
                            <p className={'text-gray2 mb-2'}>First Name</p>
                            <input type="text" className={'border border-blue rounded h-8 px-2 w-full'}/>
                        </div>
                        <div>
                            <p className={'text-gray2 mb-2'}>Last Name</p>
                            <input type="text" className={'border border-blue rounded h-8 px-2 w-full'}/>
                        </div>
                    </div>
                    <div className={'flex justify-center mb-4'}>
                        <div className={'mr-5'}>
                            <p className={'text-gray2 mb-2'}>Email</p>
                            <input type="text" className={'border border-blue rounded h-8 px-2 w-full'}/>
                        </div>
                        <div>
                            <p className={'text-gray2 mb-2'}>Phone No.</p>
                            <input type="text" className={'border border-blue rounded h-8 px-2 w-full'}/>
                        </div>
                    </div>
                    <div className={'flex justify-center mb-4'}>
                        <div className={'mr-5'}>
                            <p className={'text-gray2 mb-2'}>Password</p>
                            <input type="password" className={'border border-blue rounded h-8 px-2 w-full'}/>
                        </div>
                        <div>
                            <p className={'text-gray2 mb-2'}>Confirm password</p>
                            <input type="password" className={'border border-blue rounded h-8 px-2 w-full'}/>
                        </div>
                    </div>
                    <div className={'flex justify-center mb-6'}>
                        <input type={'checkbox'} className={'mr-2'}/>
                        <p className={'text-gray2'}>I agree with the terms of use</p>
                    </div>
                    <div className={'flex justify-center mb-6'}>
                        <button className={'bg-blue text-white rounded h-10 w-4/12'}>Sign Up</button>
                    </div>
                    <p className={'flex justify-center mb-4'}>or sign up with other accounts?</p>
                    <div className={'flex justify-center mb-4 gap-2'}>
                        <a href={'/'}>
                            <img src={google} alt={'google'}/>
                        </a>
                        <a href={'/'}>
                            <img src={facebook} alt={'facebook'}/>
                        </a>
                        <a href={'/'}>
                            <img src={instagram} alt={'instagram'}/>
                        </a>
                        <a href={'/'}>
                            <img src={linkedin} alt={'linkedin'}/>
                        </a>
                    </div>
                    <div className={'flex justify-center'}>
                        <p className={'mr-2'}>Already have an Account</p>
                        <a href={'/'} className={'text-blue'}>Sign in</a>
                    </div>
                </div>
            </div>
            <div>
                <img src={graphic} alt={'graphic'} className={'absolute h-screen w-1/2 object-cover top-0'}/>
            </div>
            <div>
                <img src={logo2} alt={'logo'} className={'absolute -top-20 right-0'}/>
            </div>
        </div>
    );
};

export default Register;
