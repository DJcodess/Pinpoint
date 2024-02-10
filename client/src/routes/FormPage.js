import store from '../assets/images/store.png';
import { Link } from "react-router-dom";
import PinPointName from '../assets/images/pinpointName.svg'; 
import ONDC from '../assets/images/ondc.svg'; 
import { makeGETRequest, makePOSTRequest } from '../utils/serverHelper';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const FormPage = () => {

    const handleFormSubmit = async () => {
        if (!csvFile) {
            alert('Please upload a CSV file before submitting the form.');
            return; // exit immediately if there is no CSV file
        }
        const url = "/upload/" + merchID;
        const formData = new FormData();
        formData.append("csvFile", csvFile);
    
        try {
            const response = await makePOSTRequest(url, formData);
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    };    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [merchID, setMerchID] = useState("");
    const [csvFile, setCsvFile] = useState("");

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
                        <input type="email" 
                                name="email" 
                                className="mt-8 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Merchant E-mail"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                />
                        <input type="password" 
                                name="password" 
                                className="mt-6 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                />
                        <input type="text" 
                                name="Merchant ID" 
                                className="my-6 border shadow-sm text-lg p-3 border border-solid border-dodgeblue bg-gray1 rounded placeholder-deepblue focus:outline-none focus:border-dodgeblue focus:ring-sky-500 block w-full rounded-md focus:ring-1 placeholder-dodgeblue" 
                                placeholder="Merchant ID" 
                                value={merchID}
                                onChange={(e) => {
                                    setMerchID(e.target.value);
                                }}
                                />
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-56 border-2 border-dodgeblue border-dashed rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700"
                                style={{
                                    background: '#ffffff26',
                                }}
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Icon icon="uiw:cloud-upload" color="#0174f0" width="100" height="100" />
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
                        </div>
                        <Link
                            to='/submit'
                            onClick={handleFormSubmit}
                            className='text-dodgeblue mt-8 bg-gradient-to-r from-blue1 to-blue2 border border-dodgeblue w-2/3 flex items-center justify-center py-4 rounded-full text-xl font-bold'>
                            <div>SUBMIT</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormPage;