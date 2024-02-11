const OkayMerchant = ({ merchant }) => {
    return (
        <div>
            <p>Name {merchant.merchantName}</p>
            <p>Price {merchant.sellingPrice}</p>
        </div>
    );
};

export default OkayMerchant;