const OkayMerchant = ({ merchant }) => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex justify-between items-center gap-x-6 border rounded-xl py-3 px-10">
                <p className="text-darkgray text-lg font-semibold">{merchant.merchantName}</p>
                <p className="text-dodgeblue text-xl font-semibold"> ₹{merchant.sellingPrice}</p>
            </div>
        </div>
    );
};

export default OkayMerchant;
