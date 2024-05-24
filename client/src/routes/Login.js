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

    const handleLogin = () => {
        // Implement login logic here
        const user = JSON.parse(Cookies.get('user'));
        if (user && user.email === email && user.password === password) {
            navigate('/dashboard');
        } else {
            // Handle login error
            alert("Invalid email or password");
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
                                }}
                                />
                        <input type="password" 
                                name="Merchant Password"
                                className="my-6 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-dodgeblue focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                />
                        <button
                            onClick={handleLogin}
                            className="text-white mt-8 bg-blue-500 border border-blue-500 w-2/3 flex items-center justify-center py-4 rounded-full text-xl font-bold transition duration-300 ease-in-out hover:text-blue-500 hover:bg-white"
                        >
                            <div>LOG IN</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
