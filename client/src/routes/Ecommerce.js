import Logo_black from '../assets/images/Logo_black.png';
import logoBig from '../assets/images/logoBig.png'; 
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Watch from '../assets/images/watch.png';
import ONDC from '../assets/images/ondc.svg';
const Ecommerce = () => {

    const handleFormSubmit = () => {

        alert('Loading AR Content...');
    };

    return (
        <div className="w-full h-full flex p-8 overflow-hidden" style={{background: "linear-gradient(to bottom right, #F6F6F6, #BDBDBD)"}}>
            <div className="w-1/2 h-full flex flex-col">
            <div className='m-12 font-extrabold text-5xl font-sans'>
                    <img src={ONDC} alt='pinpoint' className='h-16'/>
            </div>
                <img src={Watch} alt="product"/>
            </div> 
            <div className="w-1/2 h-full flex flex-col">
                <div className="flex flex-col bg-white rounded-xl">
                    <div className="flex justify-between px-20 pt-8 pb-4">
                        <div className="flex gap-x-10 font-light">
                          <p>Products</p>
                          <p>Shops</p>
                          <p>Details</p>
                          <Icon icon="majesticons:search-line" width="20" />
                        </div>
                        <div className="">
                         <Icon icon="heroicons:shopping-bag" width="20" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center"><hr className="border-t border-gray-300 w-5/6 mx-8" /></div>
                    <div className="flex gap-2 mt-8 px-12">
                      <Icon icon="ci:arrow-left-lg" width="20" />
                      <p className="text-base font-light text-darkgray">catalog</p>
                    </div>
                    <div className="flex mt-20 px-16">
                        <p className="text-6xl font-black text-black">Sternglas zirkel</p>
                    </div>
                    <div className="flex mt-10 px-16 gap-x-4 justify-start items-center">
                        <div className="w-16 h-16 bg-lightgray border border-brown rounded-xl"></div>
                        <div className="w-16 h-16 bg-lightgray rounded-xl"></div>
                        <div className="w-16 h-16 bg-lightgray rounded-xl"></div>
                        <div className="ml-3 flex items-center">
                            <p className="text-xl font-light">size:</p>
                            <p className="text-xl font-light ml-1">40</p>
                            <Icon icon="radix-icons:caret-down" className="ml-1" width="30" />
                        </div>
                    </div>
                    <div className="px-16 flex mt-16 text-4xl">
                        <p className="">₹</p>
                        <p className="ml-1.5">49990</p>
                    </div>
                    <div className="px-16 flex mt-12">
                        <p className="text-darkgray tracking-wide">Check delivery availability here:</p>
                    </div>
                    <div className="px-16 flex mt-6 gap-x-4">
                        <div className="p-2 px-4 gap-x-2 rounded-xl border border-dodgeblue flex justify-start items-center">
                            <Icon icon="gridicons:location" width="20" style={{color: "#4285F4"}} />
                            <p className="text-dodgeblue tracking-wide font-medium cursor-text">Enter PINcode</p>
                        </div>
                        <div className="p-2 px-6 bg-dodgeblue rounded-xl border border-dodgeblue flex justify-start items-center">
                            <p className="text-white tracking-wide font-medium cursor-pointer">check</p>
                        </div>
                    </div>
                    <div className="px-16 flex mt-16 gap-x-4">
                        <div className="py-2.5 px-8 gap-x-2 bg-dodgeblue rounded-lg border border-dodgeblue flex justify-start items-center">
                            <p className="text-white tracking-wide font-bold cursor-text">Buy Now</p>
                             <Icon icon="heroicons:arrow-right-16-solid" width="20" style={{color: "#ffffff"}} />
                        </div>
                        <div className="p-2 px-4 gap-x-2 rounded-xl border border-dodgeblue flex justify-start items-center">
                            <Icon icon="pepicons-pop:plus" width="20" height="20"  style={{color: "#4285F4"}} />
                            <p className="text-dodgeblue tracking-wide font-semibold cursor-text">Add to cart</p>
                        </div>
                    </div>
                    <div className="px-16 flex mt-12">
                        <p className="text-darkgray text-base font-light">
                            The minimalist among minimalists in a brushed case with a 40 mm
                            diameter. The reduction to the essential forms the character of the
                            ZIRKEL. Besides, the new 2019 version with the Miyota 9015
                            movement is 17% thinner than its predecessor. A round affair.
                        </p>
                    </div>
                    <div className="flex items-center justify-center pt-6 pb-8"><hr className="border-t border-gray-300 w-5/6 mx-8" /></div>
                </div>
            </div>   
        </div>
    )
};

export default Ecommerce;

