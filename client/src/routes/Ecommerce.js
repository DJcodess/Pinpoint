import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Watch from '../assets/images/watch.png';
import ONDC from '../assets/images/ondc.svg';
import { makeGETRequest, makePOSTRequest } from '../utils/serverHelper';

const Ecommerce = () => {
    const [pincode, setPincode] = useState('');
    const [showUnderDeliverable, setShowUnderDeliverable] = useState(false);
    const [checked, setChecked] = useState(false);
    const [blurButtons, setBlurButtons] = useState(true);
    // Hard-coded watch productID.
    const [productId, setProductId] = useState("94bc33bf-4186-4735-8da9-992aebcd11eb");
    const [merchIds, setMerchIds] = useState([
        "c2f307a7-bd0e-4a70-abdd-22123cc6c2df",
        "5cb97d9a-176c-43ea-bc50-372d9b0216ed",
        "cfad73b7-eed1-4d3c-8b83-df02b790ec5a"
    ]);

    const handleCheck = async () => {
        setChecked(true);

        // TODO: MongoDB part remaining. Hard-coded for now:


        console.log(merchIds.length);
        if (merchIds.length > 0) {
            console.log("Merchant IDs are: " + merchIds);

            setShowUnderDeliverable(true);
            setBlurButtons(false);
        } else {
            console.log("No merchants sell this product");
            return;
        }

        let serviceableMerchants = []
        for (let i = 0; i < merchIds.length; i++) {
            try {
                const url = "/pincode/" + merchIds[i] + "/" + pincode;
                const response = await makeGETRequest(url);
                if (response["serviced"]) {
                    serviceableMerchants.append(merchIds[i]);
                }
            } catch (err) {
                console.log(`Error checking pincode for merchantId ${merchIds[i]}: `, err);
            }
        }
        console.log("Merchants that deliver to pincode: ", serviceableMerchants);
    };

    // TODO: Use MongoDB to fetch merchIds for the prodId on page click.
    // const returnMerchantIds = async (prodId) => {
    //     try {
    //         const url = "/product/items/" + prodId;
    //         const response = await makeGETRequest(url, []);
    //         console.log(response);
    //         const fetchResponse = response["merchantIds"];
    //         return fetchResponse;
    //     } catch (error) {
    //         console.error('Error fetching product:', error);
    //     }
    // }

    const handlePincodeChange = (e) => {
        setPincode(e.target.value);
    };

    return (
        <div className="w-full h-full flex p-8 overflow-hidden font-sans" style={{ background: "linear-gradient(to bottom right, #F6F6F6, #BDBDBD)" }}>
            <div className="w-1/2 h-full flex flex-col">
                <div className='m-4 font-extrabold text-5xl'>
                    <img src={ONDC} alt='pinpoint' className='h-16' />
                </div>
                <div className="pt-16">
                    <img src={Watch} alt="product" />
                </div>
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
                    <div className="flex gap-2 mt-8 px-12 items-center">
                        <Icon icon="ci:arrow-left-lg" width="20" />
                        <p className="text-base font-light text-darkgray">catalog</p>
                    </div>
                    <div className="flex mt-20 px-16">
                        <p className="text-6xl font-extrabold text-black">Sternglas zirkel</p>
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
                    <div className="px-16 flex mt-6 gap-x-4 items-center">
                        <div className="relative">
                            <Icon icon="gridicons:location" width="20" style={{ color: "#4285F4" }} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            <input
                                className="p-2 pl-10 w-44 rounded-xl border border-dodgeblue text-dodgeblue tracking-wide font-medium cursor-text placeholder-dodgeblue"
                                placeholder="Enter PINcode"
                                value={pincode}
                                onChange={handlePincodeChange}
                            />
                        </div>
                        {!checked && (
                            <div className="p-2 px-6 bg-dodgeblue rounded-xl border border-dodgeblue flex justify-start items-center">
                                <p className="text-white tracking-wide font-medium cursor-pointer" onClick={handleCheck}>check</p>
                            </div>
                        )}
                        {showUnderDeliverable && (
                            <div className="px-6 flex justify-start items-center gap-x-2">
                                <p className="text-darkgreen text-lg">Under deliverable premises</p>
                                <Icon icon="akar-icons:circle-check" width="20" color="#198436" />
                            </div>
                        )}
                    </div>
                    <div className="px-16 flex mt-16 gap-x-4">
                        <div className={`py-2.5 px-8 gap-x-2 bg-dodgeblue rounded-lg border border-dodgeblue flex justify-start items-center ${blurButtons ? 'blur-sm' : ''}`}>
                            <p className="text-white tracking-wide font-bold cursor-text">Buy Now</p>
                            <Icon icon="heroicons:arrow-right-16-solid" width="20" style={{ color: "#ffffff" }} />
                        </div>
                        <div className={`p-2 px-4 gap-x-2 rounded-xl border border-dodgeblue flex justify-start items-center ${blurButtons ? 'blur-sm' : ''}`}>
                            <Icon icon="pepicons-pop:plus" width="20" height="20" style={{ color: "#4285F4" }} />
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
    );
};

export default Ecommerce;
