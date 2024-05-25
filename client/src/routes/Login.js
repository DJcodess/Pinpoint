import store from '../assets/images/store.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Cookies from 'js-cookie';
import PinPointName from '../assets/images/pinpointName.svg'; 
import ONDC from '../assets/images/ondc.svg';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };   

    const handleLogin = () => {
        setEmailError("");
        setPasswordError("");

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address!");
            return;
        }
        if (!password || password.length === 0) {
            setPasswordError("Please enter your password");
            return;
        }
        // TODO: Implement login logic here (token).
        const user = JSON.parse(Cookies.get('user'));
        if (user && user.email === email && user.password === password) {
            navigate('/dashboard');
        } else {
            alert("Invalid Log-in credentials!!");
        }
    };

    return (
        <div className="w-full h-full bg-lightgray flex">
            {/* left side */}
            <div className='w-1/2'>
                <div className='m-12 font-extrabold text-5xl font-sans'>
                    <img src={ONDC} alt='pinpoint' className='h-16'/>
                </div>
                <div className='mt-28 ml-8'>
                    <img src={store} alt="store" />
                </div>
            </div>
            {/* right side */}
            <div className=' w-1/2 flex items-center justify-center flex-col'>
                <div className='m-10 w-3/5'>
                    {/* form */}
                    <div className='w-full p-10 flex items-center justify-center flex-col border-dodgeblue rounded-2xl backdrop-blur border '>
                        <Link to='*' >
                            <div className='font-bold mb-4'>
                                <img src={PinPointName} alt="VisionXR" />
                            </div>
                        </Link>
                        <input type="text" 
                                name="Merchant Email" 
                                className="mt-6 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-dodgeblue focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Merchant E-mail" 
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError("");
                                }}
                                />
                        {emailError && <p className="text-red-500 mt-2">{emailError}</p>}

                        <input type="password" 
                                name="Merchant Password"
                                className="my-6 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-dodgeblue focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                }}
                                />
                        {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}

                        <button
                            onClick={handleLogin}
                            className="text-white mt-8 bg-blue-500 border border-blue-500 w-2/3 flex items-center justify-center py-4 rounded-full text-xl font-bold transition duration-300 ease-in-out hover:text-blue-500 hover:bg-white"
                        >
                            <div>LOG IN</div>
                        </button>
                        <div className="text-gray2 pt-4 flex items-center">
                            <p className="italic">Or, new here? </p>
                            <Link to='/signup'>
                             <span className="text-dodgeblue font-semibold text-lg ml-1.5">Register</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
