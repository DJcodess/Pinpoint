import store from '../assets/images/store.png';
import Logo_black from '../assets/images/Logo_black.png';
import { Link } from "react-router-dom";
import TextInput from '../components/TextInput.js';
import PasswordInput from '../components/PasswordInput';
import Upload from '../components/Upload';
import Drone from '../components/Drone';


const FormPage = () => {

    const handleFormSubmit = () => {
        // Handle form submission logic here
        
        // Display a success alert
        alert('Successfully onboarded BIR - The Experience Drone to VisionXR :)');
    };

    return (
        <div className="w-full h-full bg-gradient-to-b from-lightblue to-deepblue flex">
            {/* left side */}
            <div className='w-1/2'>
                <div className='m-12 font-extrabold text-5xl text-yelloe font-sans'>
                    ApeXR
                </div>
                <div className='mt-28 ml-8'>
                    <img src={store} alt="logoBig" />
                </div>
            </div>
            {/* right side */}
            <div className=' w-1/2 flex items-center justify-center flex-col'>
                <div className='m-10 w-3/5'>
                    {/* form */}
                    <div className='inputRegion w-full p-10 flex items-center justify-center flex-col bg-glass rounded-2xl backdrop-blur border '>
                        <Link to='*' >
                        <div className='font-bold mb-4'>
                            <img src={Logo_black} alt="VisionXR" />
                        </div>
                        </Link>
                        <input type="email" 
                                name="email" 
                                className="mt-8 border shadow-sm text-xl p-3 border border-solid border-deepblue bg-glass rounded placeholder-deepblue focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1" 
                                placeholder="E-mail Address" />
                        <input type="password" 
                                name="password" 
                                className="mt-6 border shadow-sm text-xl p-3 border border-solid border-deepblue bg-glass rounded placeholder-deepblue focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1" 
                                placeholder="Password" />
                        <input type="Product" 
                                name="Product" 
                                className="my-6 border shadow-sm text-xl p-3 border border-solid border-deepblue bg-glass rounded placeholder-deepblue focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1" 
                                placeholder="Product Name" />
                        <Upload/>
                        <Link
                            to='/submit'
                            onClick={handleFormSubmit}
                            className='text-white mt-8 bg-gradient-to-r from-blue1 to-blue2 hover:border border-white w-2/3 flex items-center justify-center py-4 rounded-full text-xl font-bold'>
                            <div>SUBMIT</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormPage;