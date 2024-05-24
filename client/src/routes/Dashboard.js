// src/components/Dashboard.js
import React from 'react';
import { Icon } from '@iconify/react';
import PinPointName from '../assets/images/pinpointName.svg'; 

const Dashboard = () => {
    const pincodes = [
      { code: '12345', productName: 'Widget A', state: 'California', city: 'Los Angeles' },
      { code: '54321', productName: 'Gadget B', state: 'New York', city: 'New York City' },
      { code: '98765', productName: 'Thingamajig C', state: 'Texas', city: 'Houston' },
      { code: '67890', productName: 'Doodad D', state: 'Florida', city: 'Miami' },
      { code: '13579', productName: 'Gizmo E', state: 'Illinois', city: 'Chicago' },
      { code: '24680', productName: 'Whatchamacallit F', state: 'Arizona', city: 'Phoenix' },
      { code: '97531', productName: 'Contraption G', state: 'Washington', city: 'Seattle' },
      { code: '86420', productName: 'Thingummy H', state: 'Massachusetts', city: 'Boston' },
      { code: '11223', productName: 'Doodad I', state: 'Georgia', city: 'Atlanta' },
      { code: '99887', productName: 'Widget J', state: 'Colorado', city: 'Denver' },
      { code: '56789', productName: 'Gadget K', state: 'Nevada', city: 'Las Vegas' },
      { code: '54321', productName: 'Thingamajig L', state: 'Ohio', city: 'Columbus' },
      { code: '78901', productName: 'Gizmo M', state: 'Michigan', city: 'Detroit' },
      { code: '45678', productName: 'Whatchamacallit N', state: 'Oregon', city: 'Portland' },
      { code: '32198', productName: 'Contraption O', state: 'Tennessee', city: 'Nashville' },
      { code: '23456', productName: 'Thingummy P', state: 'North Carolina', city: 'Charlotte' },
      { code: '65432', productName: 'Doodad Q', state: 'Indiana', city: 'Indianapolis' },
      { code: '98765', productName: 'Widget R', state: 'Virginia', city: 'Virginia Beach' },
      { code: '87654', productName: 'Gadget S', state: 'Maryland', city: 'Baltimore' },
      { code: '54321', productName: 'Thingamajig T', state: 'Minnesota', city: 'Minneapolis' },
      { code: '23456', productName: 'Gizmo U', state: 'Wisconsin', city: 'Milwaukee' },
      { code: '76543', productName: 'Whatchamacallit V', state: 'Louisiana', city: 'New Orleans' },
      { code: '34567', productName: 'Contraption W', state: 'Kentucky', city: 'Louisville' },
      { code: '78901', productName: 'Thingummy X', state: 'Missouri', city: 'Kansas City' },
      { code: '87654', productName: 'Doodad Y', state: 'Alabama', city: 'Birmingham' },
      { code: '65432', productName: 'Widget Z', state: 'Oklahoma', city: 'Oklahoma City' },
      { code: '54321', productName: 'Gadget AA', state: 'Connecticut', city: 'Bridgeport' },
      { code: '12345', productName: 'Thingamajig AB', state: 'Arkansas', city: 'Little Rock' },
      { code: '23456', productName: 'Gizmo AC', state: 'Iowa', city: 'Des Moines' },
      { code: '34567', productName: 'Whatchamacallit AD', state: 'Utah', city: 'Salt Lake City' },
      { code: '45678', productName: 'Contraption AE', state: 'Mississippi', city: 'Jackson' },
      { code: '56789', productName: 'Thingummy AF', state: 'Kansas', city: 'Wichita' },
      { code: '67890', productName: 'Doodad AG', state: 'Nebraska', city: 'Omaha' },
      { code: '78901', productName: 'Widget AH', state: 'Hawaii', city: 'Honolulu' },
      { code: '87654', productName: 'Gadget AI', state: 'Rhode Island', city: 'Providence' },
      { code: '98765', productName: 'Thingamajig AJ', state: 'Maine', city: 'Portland' },
      { code: '99887', productName: 'Gizmo AK', state: 'New Hampshire', city: 'Manchester' },
      { code: '11223', productName: 'Whatchamacallit AL', state: 'Idaho', city: 'Boise' },
      { code: '13579', productName: 'Contraption AM', state: 'Montana', city: 'Billings' },
      { code: '24680', productName: 'Thingummy AN', state: 'North Dakota', city: 'Fargo' },
      { code: '97531', productName: 'Doodad AO', state: 'South Dakota', city: 'Sioux Falls' },
      { code: '86420', productName: 'Widget AP', state: 'Wyoming', city: 'Cheyenne' },
      { code: '78901', productName: 'Gadget AQ', state: 'Alaska', city: 'Anchorage' },
      { code: '54321', productName: 'Thingamajig AR', state: 'Vermont', city: 'Burlington' },
      { code: '23456', productName: 'Gizmo AS', state: 'Delaware', city: 'Wilmington' },
      { code: '87654', productName: 'Whatchamacallit AT', state: 'South Carolina', city: 'Columbia' },
      { code: '45678', productName: 'Contraption AU', state: 'West Virginia', city: 'Charleston' },
      { code: '98765', productName: 'Thingummy AV', state: 'New Mexico', city: 'Albuquerque' },
      { code: '65432', productName: 'Doodad AW', state: 'District of Columbia', city: 'Washington D.C.' },
      { code: '54321', productName: 'Widget AX', state: 'Puerto Rico', city: 'San Juan' },
      { code: '23456', productName: 'Gadget AY', state: 'Guam', city: 'Hagåtña' },
      { code: '78901', productName: 'Thingamajig AZ', state: 'U.S. Virgin Islands', city: 'Charlotte Amalie' },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <img src={PinPointName} alt="pinpoint" className="h-4"/>
                <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
                <div className="border-b border-gray-300 w-full mb-4"></div>
                <div className="text-2xl font-bold px-2 py-1 text-gray-900">
                    <span className="">Hello! Merchant XYZ</span>
                </div>
                <div className="flex justify-between mb-6 mt-4 text-darkgray">
                    <div className="w-2/5 flex flex-col items-center border border-gray-300 p-4 justify-evenly rounded-lg">
                        <p className="text-2xl font-semibold">Enter PinCodes manually</p>
                        <div className="flex gap-3 w-full">
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter pincode here"
                            />
                            <button className="bg-dodgeblue py-1.5 px-4 text-white rounded font-medium">
                                Insert
                            </button>
                        </div>
                    </div>
                    <div className="w-3/5 flex flex-col items-center justify-center border border-gray-300 p-4 rounded-lg mx-2">
                        <div className="flex gap-2">
                            <Icon icon="bi:filetype-csv" color="#0174f0" width="60" height="60" />
                            <div className="flex flex-col">
                                <p className="mt-2 font-semibold text-xl text-darkgray">Import CSV</p>
                                <p className="text-xs text-gray2">csv file (MAX. 100MB)</p>
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
                                <input id="file-upload" type="file" className="hidden" />
                            </div>
                            <div className="mt-4">
                                <button className="bg-dodgeblue py-1.5 px-4 text-white rounded font-medium">
                                    Insert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-semibold mb-4">Total PinCodes Serving (10)</h3>
                        <span>See Also: <button className="text-blue-500">Product Catalog</button></span>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                        <ul>
                            {pincodes.map((code, index) => (
                                <li key={index} className="flex items-center justify-between mb-2 p-2 bg-white rounded-lg shadow-sm">
                                    <div className="flex items-center">
                                        <Icon icon="system-uicons:location" className="text-2xl mr-4 text-dodgeblue" />
                                        <div>
                                            <p className="font-medium text-xl text-darkgray">{code.code}</p>
                                            <p className="text-sm text-gray-500"></p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-500 mr-4"></span>
                                        <button className="text-blue-500"></button>
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