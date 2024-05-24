import store from '../assets/images/store.png';
import { Link, useNavigate } from "react-router-dom";
import PinPointName from '../assets/images/pinpointName.svg'; 
import ONDC from '../assets/images/ondc.svg'; 
import { makeGETRequest, makePOSTRequest } from '../utils/serverHelper';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import PincodeDisplay from './Dashboard';

const FormPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const [merchID, setMerchID] = useState("");
    const [csvFile, setCsvFile] = useState("");

    // const handleFormSubmit = async () => {
    //     // if (!csvFile) {
    //     //     alert('Please upload a CSV file before submitting the form.');
    //     //     return; // Exit the function early if no CSV file is selected
    //     // }

    //     const url = "/pincode/" + merchID;
    //     const formData = new FormData();
    //     formData.append("csvFile", csvFile);

    //     try {
    //         const response = await makePOSTRequest(url, formData);
    //         const pincodeData = response.data; // Assuming response.data contains the list of pincodes
    //         console.log(response);
    //         alert('Form submitted successfully!');
    //         navigate('/pincodes', { state: { pincodes: pincodeData } });
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('An error occurred while submitting the form. Please try again later.');
    //     }
    // };

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
                        <input type="name" 
                                name="name" 
                                className="mt-8 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Merchant Name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                />
                        <input type="address" 
                                name="address" 
                                className="mt-6 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Merchant Address" 
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                />
                        <input type="text" 
                                name="Merchant Description" 
                                className="mt-6 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-dodgeblue focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Merchant Descripion" 
                                value={merchID}
                                onChange={(e) => {
                                    setMerchID(e.target.value);
                                }}
                                />
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
                        {/* <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-56 border-2 border-dodgeblue border-dashed rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700"
                                style={{
                                    background: '#ffffff26',
                                }}
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Icon icon="uiw:cloud-upload" color="#0174f0" width="40" height="40" />
                                    <p className="mb-2 text-sm text-dodgeblue mt-4 ">
                                        <span className="font-semibold">Click to upload</span> or drag and drop the csv file
                                    </p>
                                    <p className="text-xs text-dodgeblue ">
                                        csv, xlsx (MAX. 100MB)
                                    </p>
                                </div>
                                <input id="dropzone-file" 
                                    type="file" 
                                    className="hidden" 
                                    onChange={(e) => {
                                        setCsvFile(e.target.files[0]);
                                    }}
                                />
                            </label>
                        </div> */}
                        <button
                            // onClick={handleFormSubmit}
                            className="text-white mt-8 bg-blue-500 border border-blue-500 w-2/3 flex items-center justify-center py-4 rounded-full text-xl font-bold transition duration-300 ease-in-out hover:text-blue-500 hover:bg-white"
                        >
                            <Link to='/dashboard'>
                                <div>GET ONBOARD</div>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPage;