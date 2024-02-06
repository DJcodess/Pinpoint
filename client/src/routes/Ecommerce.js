import Logo_black from '../assets/images/Logo_black.png';
import logoBig from '../assets/images/logoBig.png'; 
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Drone3D from '../components/Drone';

const Ecommerce = () => {

    const handleFormSubmit = () => {
        // Handle form submission logic here
        
        // Display a success alert
        alert('Loading AR Content...');
    };

    return (
        <div className="w-full h-full bg-white">
                <div className='bg-wallmartblue font-mid text-zinc-300 flex justify-between '>
                    <div className="w-1/6 m-4">
                    <img src={Logo_black} alt="logo"  className="w-32 hidden p-4 sm:w-1/6 h-1/5"/>
                    <img src={logoBig} alt="icon" className="w-10 sm:hidden"/>
                    </div>
                    <label className=" w-4/6 text-sm tracking-wider mt-4">
                            <span className="absolute ml-2 mt-1 text-3xl flex items-center">
                            <Icon icon="teenyicons:search-outline" color="black" className='bg-yelloe rounded-3xl p-1'/>
                            </span>
                            <input
                                className="placeholder-italic placeholder-search placeholder-text-lg bg-white border rounded-3xl py-2 pl-9 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                placeholder="   Search ShopXR   "
                                type="text"
                                name="search"
                            />
                    </label>
                    {/* <div className="flex flex-auto items-center relative">
                        <input
                            type="search"
                            aria-label="Search"
                            aria-activedescendant=""
                            className="flex-auto sans-serif rounded-3xl h-10 pl-4 pr-10"
                            name="q"
                            placeholder="Search Walmart"
                            aria-autocomplete="list"
                            aria-haspopup="listbox"
                            autoComplete="off"
                            value=""
                            data-automation-id="header-input-search"
                        />
                        <Icon icon="teenyicons:search-outline" color="black" className='bg-yelloe text-3xl rounded-3xl p-1'/>
                    </div> */}

                    <div className="w-1/6 m-4 text-4xl ml-16">
                    <Icon icon="carbon:user-avatar-filled" color="white" />
                    </div>
                    </div>
                <div className="mt-6 flex justify-center font-black text-4xl sm:text-6xl text-deepblue tracking-wide">
                    ShopXR
                </div>
            <div className='w-full sm:h-1/2 ml-4 sm:ml-8 sm:flex flex-row justify-center '>
                {/* left side */}
                <div className='sm:w-1/2 sm:mt-32 sm:h-96 sm:mr-8 sm:px-6 mr-8 h-64 p-4'>
                    {/* <div className='mt-36 ml-20 w-3/4'> */}
                        {/* <img src={Drone} alt="logoBig" className="rounded-xl"/> */}
                        <Drone3D/>
                    {/* </div> */}
                </div>
                <div className="flex justify-between mx-4">
                        <Icon icon="mdi:heart-outline" className='ml-2 text-xl'/>
                        <Icon icon="ri:share-fill" className='mr-8 text-xl'/>
                        </div>
                {/* right side */}
                <div className=' w-11/12 border bg-white rounded-md shadow-md mt-4 box-border p-2 sm:w-1/2 flex flex-col'>
                    <div className='w-full sm:mt-10 sm:w-5/6'>  
                    <div className='mt-4 font-extrabold text-2xl sm:font-black sm:text-5xl text-black'>BIR - The Experience Drone</div>
                    <div className='mt-2 font-semibold text-xl sm:font-black sm:text-xl text-green-600'>
                        Now at ₹4099 <span className="line-through font-light text-search text-lg">₹6249</span>
                    <div className="flex flex-row mt-2">
                    <Icon icon="ph:star-fill" color="#ffc220" />
                    <Icon icon="ph:star-fill" color="#ffc220" />
                    <Icon icon="ph:star-fill" color="#ffc220" />
                    <Icon icon="ph:star-fill" color="#ffc220" />
                    <Icon icon="ph:star-light" color="#757575"/>
                    <span className="ml-2 text-sm text-search font-light">(4.1) 81 Reviews</span>
                    </div>    
                    </div>
                    <ul> 
                    <li className='mt-4 sm:mt-16 sm:font-light sm:text-xl italic text-zinc-500'> Use BIR to learn the ins and outs of drone flying</li>
                    <li className='mt-1 sm:mt-16 sm:font-light sm:text-xl italic text-zinc-500'> A safe, stable and small drone</li>
                    <li className='mt-1 sm:mt-16 sm:font-light sm:text-xl italic text-zinc-500'> This micro drone is specifically designed for educational and learning purposes, making it the perfect choice for those who are new to the world of drones</li>
                    </ul>
                    </div>
                    {/* <div class="border-t-2 border-search"></div> */}
                    <div className='mt-4 sm:mt-10'>
                        <h3 className="font-medium text-lg sm:text-2xl text-black">More Information</h3>
                        <div className='m-2 text-search sm:mt-8 sm:ml-2 sm:font-thin sm:text-xl text-zinc-300'>
                              <li><span className="text:xs font-semibold">Weight</span>: <span className="italic ml-20">500g</span></li>
                              <li><span className="font-semibold">Dimensions</span>: <span className="italic ml-10">20 × 18 × 6 cm</span></li>
                              <li><span className="font-semibold">Battery</span>: <span className="italic ml-20">5000 mAh</span></li>
                              <li><span className="font-semibold">Warranty</span>: <span className="italic ml-16">24 months</span></li>
                        </div>    
                    </div>
                    <div className='mt-4 sm:mt-10'>
                        <div className='m-2 text-search flex flex-row sm:mt-8 sm:ml-2 sm:font-thin sm:text-xl text-zinc-300'>
                        <Icon icon="la:shipping-fast" color='black' className="text-xl"/>
                        <h3 className="font-light ml-4 text-base sm:text-xl text-black">Free Shipping, <span className="font-bold">arrives by Wed, Aug 30</span></h3>
                        </div>
                        <div className='m-2 text-search flex flex-row sm:mt-8 sm:ml-2 sm:font-thin sm:text-xl text-zinc-300'>
                        <Icon icon="ic:outline-add-business" color='black' className="text-xl"/>
                        <h3 className="font-light flex flex-row ml-4 text-base sm:text-xl text-black">Sold by, <span className="font-bold ml-1"> BIR Drone Company</span> 
                        <Icon icon="material-symbols:verified-outline" color="#0171dc" />
                        </h3>
                        </div>
                        <div className='m-2 text-search flex flex-row sm:mt-8 sm:ml-2 sm:font-thin sm:text-xl text-zinc-300'>
                        <Icon icon="ic:round-replay-circle-filled" color="#0171dc" className="text-xl" />  <span className="font-base ml-4 text-black text-base"> Free 30-day return policy</span>
                        </div> 
                    </div>
                    <div className='mt-8 sm:mt-10'>
                        <h3 className="font-medium text-lg sm:text-2xl text-black">Similar Items you might like</h3>   
                    </div>
                    <div className='flex flex-row fixed bottom-0 left-0 right-0 p-4 sm:mt-10'>
                        <Link
                            to='/submit'
                            onClick={handleFormSubmit}
                            className='text-white h-12 sm:w-60 mt-8 bg-gradient-to-r from-blue1 to-blue2 hover:border border-white w-2/3 flex items-center justify-center py-4 rounded-xl text-xl font-light sm:font-bold'>
                            <div className="flex">Buy Product
                            <Icon icon="icons8:buy" color="white" className='ml-4' width="30" height="30"/>
                            </div>
                        </Link>
                        <div className="h-12 mt-8 ml-8 py-2 px-2 text-green-600 text-xl font-bold">
                           ₹4099
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
};

export default Ecommerce;

