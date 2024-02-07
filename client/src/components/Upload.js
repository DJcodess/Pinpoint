import React from 'react';
import uploadIcon from '../assets/images/uploadIcon.png';
import { Icon } from '@iconify/react';

const Upload = () => {
    return (
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
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>
    );
};

export default Upload;
