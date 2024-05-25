// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import PinPointName from '../assets/images/pinpointName.svg'; 
import { makeGETRequest, makePOSTRequest, makeDELETERequest } from '../utils/serverHelper';

const Dashboard = () => {

    // 'merchantId' for which the dashboard is open (logged-in merchant).
    const [merchantId, setMerchantId] = useState("3");
    const [merchantName, setMerchantName] = useState("");
    const [pincodes, setPincodes] = useState([]);
    const [csvFile, setCsvFile] = useState("");

    useEffect(() => {
        setDetailsOnPage();
    }, [merchantId]);

    useEffect (() => {
        // TODO: Update merchantId with logged-in user.

        setMerchantId("51ce09c7-17f2-4e7b-97e7-1a63e800d543");
    }, []);

    const setDetailsOnPage = async () => {
        try {
            let retObject = await makeGETRequest(`/merchant/merchants/${merchantId}`);
            setMerchantName(retObject["merchantName"]);
            await updatePincodesList();
        } catch (err) {
            console.log("Error in getting merchant details ", err);
        }
    };

    const updatePincodesList = async () => {
        try {
            let retObject = await makeGETRequest(`/pincode/${merchantId}`);
            const pincodesList = retObject["pincodesList"];
            console.log("Received pincodes list successfully: ", pincodesList);
            setPincodes(pincodesList);
        } catch (err) {
            console.log("Error in fetching pincodes list ", err);
        }
    }

    const handleSingleInsert = async () => {
        const pincodeInput = document.getElementById("single-pincode");
        const pincode = pincodeInput.value;
        // Pincode validation.
        if (!/^\d{6}$/.test(pincode)) {
            console.log("Invalid pincode format, you entered: ", pincode);
            alert("Invalid Request! Pincode has to be a 6-digit number only.");
            return;
        }
        try {
            await makePOSTRequest(`/pincode/${merchantId}/${pincode}`);
            updatePincodesList(); // asynchronous call.
            document.getElementById("single-pincode").value = "";
        } catch (err) {
            console.log("Error in appending pincode to merchant's list: ", err);
        }
    }
    
    const handleCsvMassInsert = async () => {
        // File validation.
        if (!csvFile) {
            alert('Please upload a CSV file before submitting the form.');
            return; // Exit the function early if no CSV file is selected
        }

        const formData = new FormData();
        formData.append("csvFile", csvFile);

        try {
            const response = await makePOSTRequest(`/pincode/${merchantId}`, formData);
            updatePincodesList(); // asynchronous call.
            console.log(response);
            alert('Pincodes submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    }

    const handleMassDelete = async () => {
        try {
            const response = await makeDELETERequest(`/pincode/remove/${merchantId}`);
            updatePincodesList(); // asynchronous call.
            console.log(response);
            alert('All pincodes deleted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while deleting pincodes.');
        }
    }

    const handleSingleDelete = async (pincode) => {
        try {
            const response = await makeDELETERequest(`/pincode/remove/${merchantId}/${pincode}`);
            updatePincodesList(); // asynchronous call.
            console.log(response);
            alert('Selected pincode deleted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while deleting pincodes.');
        }
    }


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <img src={PinPointName} alt="pinpoint" className="h-4"/>
                <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
                <div className="border-b border-gray-300 w-full mb-4"></div>
                <div className="text-2xl font-bold px-2 py-1 text-gray-900">
                    <span className="">Hello! {merchantName}</span>
                </div>
                <div className="flex justify-between mb-6 mt-4 text-darkgray">
                    <div className="w-2/5 flex flex-col items-center border border-gray-300 p-4 justify-evenly rounded-lg">
                        <p className="text-2xl font-semibold">Enter Pincodes manually</p>
                        <div className="flex gap-3 w-full">
                            <input
                                type="text"
                                name="single-pincode"
                                id="single-pincode"
                                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter pincode here"
                            />
                            <button className="bg-dodgeblue py-1.5 px-4 text-white rounded font-medium" onClick={handleSingleInsert}>
                                Insert
                            </button>
                        </div>
                    </div>
                    <div className="w-3/5 flex flex-col items-center justify-center border border-gray-300 p-4 rounded-lg mx-2">
                        <div className="flex gap-2">
                            <Icon icon="bi:filetype-csv" color="#0174f0" width="60" height="60" />
                            <div className="flex flex-col">
                                <p className="mt-2 font-semibold text-xl text-darkgray">Import CSV</p>
                                <p className="text-xs text-gray2">csv file</p>
                            </div>
                        </div>
                        <div className="flex  items-center w-full gap-3">
                            <div className="flex py-2 px-2 border border-dashed border-gray2 rounded-lg items-center justify-around w-full mt-3 bg-gray1">
                                <label htmlFor="file-upload" className="cursor-pointer flex gap-2 py-2 items-center justify-around w-full">
                                    <span>Drop CSV here or</span>
                                    <div className="flex items-center py-1.5 px-5 bg-blue-100 border border-blue-300 rounded gap-1.5">
                                        <Icon icon="tabler:upload" color="#0174f0" width="20" height="20" />
                                        <p className="ml-1 font-semibold">Upload</p>
                                    </div>
                                </label>
                                <input id="file-upload" type="file" className="hidden" 
                                    onChange={(e) => {
                                        setCsvFile(e.target.files[0]);
                                    }} />
                            </div>
                            <div className="mt-4">
                                <button className="bg-dodgeblue py-1.5 px-4 text-white rounded font-medium" onClick={handleCsvMassInsert}>
                                    Insert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-semibold mb-4">Total Pincodes Serving ({pincodes.length})</h3>
                        <button className="text-base font-base text-red-500 mr-2 hover:drop-shadow-lg hover:text-lg" onClick={handleMassDelete}>Clear All</button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                        <ul>
                            {Array.isArray(pincodes) && pincodes.map((code, index) => (
                                <li key={index} className="flex items-center justify-between mb-2 p-2 bg-white rounded-lg shadow-sm">
                                    <div className="flex items-center">
                                        <Icon icon="system-uicons:location" className="text-2xl mr-4 text-dodgeblue" />
                                        <div>
                                            <p className="font-medium text-xl text-darkgray">{code}</p>
                                            <p className="text-sm text-gray-500"></p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon icon="mingcute:delete-line" className="text-red-500 mr-2 text-lg cursor-pointer hover:drop-shadow-xl hover:animate-ping" onClick={handleSingleDelete} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;