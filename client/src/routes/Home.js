import logoBig from '../assets/images/logoBig.png';
import Name from '../assets/images/Name.png';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import PinPointName from '../assets/images/pinpointName.svg'; 
import ONDC from '../assets/images/ondc.svg'; 
import StartupIndia from '../assets/images/startupindia.svg'; 
import Decor from '../assets/images/decor.svg';
import HomeImg from '../assets/images/homeimg.svg'; 
const Home = () => {
    return (
        <div className="w-full h-full bg-lightgray flex overflow-x-hidden">
            {/* left side */}
            <div className='w-1/2'>
                <div className='m-6 mx-12'>
                    <img src={ONDC} alt='pinpoint' className='h-16'/>
                </div>
                <div className='ml-16 mt-24 text-dodgeblue font-bold text-9xl tracking-wide font-sans flex justify-center items-center'>
                      Build for Bharat
                </div>
                <div className='ml-20 mt-12 flex items-start'>
                      <p className='text-darkgray font-semibold text-xl tracking-wide font-sans py-2.5'>supported by</p>
                      <img src={StartupIndia} alt='startup India' className='ml-4' />
                </div>
                <div className='w-72 ml-20 mt-12 flex justify-around items-center border border-darkgreen rounded-full py-2 px-4'>
                    <Icon icon="ion:cart" width="28" height="28"  style={{color: '#0F9D58'}} className='w-10 h-10 bg-lightgreen p-2 rounded-full'/>
                    <p className='text-darkgreen font-light text-2xl text-left tracking-wide font-sans'>Retail & Logistics</p>
                </div>
                <div className='ml-20 mt-12 flex flex-col'>
                    <p className='text-app-black font-bold text-4xl text-left tracking-wide font-sans'>Optimal storage & retrieval in </p>
                    <p className='mt-3 text-app-black font-bold text-5xl text-left tracking-wide font-sans'>M*N sparse matrix </p>
                </div>
                <div className='mt-12 ml-20 flex'>
                        <Link to="/formpage">
                            <div className='px-6 py-2 text-white bg-dodgeblue font-semibold text-2xl border-1 rounded-full flex drop-shadow-lg hover:bg-white hover:text-dodgeblue hover:border-dodgeblue'>
                              Get Started 
                             <Icon icon="formkit:submit" className='ml-4 mt-1' />
                            </div>
                        </Link>    
                </div>
            </div>
            {/* right side */}
            <div className='w-1/2'>
                <div className='m-6 mx-12 flex flex-row-reverse'>
                <Link to='/ecommerce' > 
                  <img src={PinPointName} alt='pinpoint'/>
                  <p className='text-xs text-center text-dodgeblue italic'>click here to view buyer app</p>
                </Link>
                </div>
                <div className='h-40 mt-24 flex flex-row-reverse'>
                    <img src={Decor} alt='decor'/>
                </div>
                <div className='mt-32 flex flex-col-reverse'>
                    <img src={HomeImg} alt='home img' />
                </div>
            </div>
        </div>
    )
};

export default Home;