import logoBig from '../assets/images/logoBig.png';
import Name from '../assets/images/Name.png';
import VisionXR_Logo from '../assets/images/VisionXR_Logo.png';
import Sparkthon from '../assets/images/Sparkthon.png';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className="w-full h-full bg-royalblue flex">
            {/* left side */}
            <div className='bg-gradient-to-b from-lightblue to-deepblue w-[46%]'>
                <div className='m-12 font-extrabold text-5xl text-yelloe font-sans'>
                    ApeXR
                </div>
                <div className='ml-40 mt-64 w-1/2 flex justify-center items-center'>
                      <img src={logoBig} alt='logo' />
                </div>
            </div>
            {/* right side */}
            <div className=' w-[54%]'>
                <div className='m-10 flex flex-row-reverse'>
                <Link to='/ecommerce' > 
                    <img src={VisionXR_Logo} alt='logo' />
                </Link>
                </div>
                <div className='ml-16 mt-32'>
                    <img src={Sparkthon} alt='logo' />
                </div>
                <div className='ml-16 mt-24 text-yelloe font-extrabold text-8xl tracking-wide font-sans'>
                    Team ApeXR
                </div>
                <div className='ml-20 mt-12 text-grey italic font-light text-2xl tracking-wide'>
                     Explore a Whole New World of opportunities with
                </div>
                <div className='ml-20 mt-24 w-full'>
                    <img src={Name} alt='logo' />
                </div>
                <div className='mt-28 flex justify-center'>
                        <Link to="/formpage">
                            <div className='px-6 py-2 text-white font-medium text-xl border-2 border-white rounded-2xl flex drop-shadow-lg hover:bg-blue1'>
                            Get Started with 3D
                            <Icon icon="formkit:submit" color="white" className='ml-4 mt-1' />
                            </div>
                        </Link>
                        
                </div>
            </div>
        </div>
    )
};

export default Home;