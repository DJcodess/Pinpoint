// routes/getRedis.js
const redis = require('redis');


function getMerchantPincodes(merchantId, callback) {
    client.smembers(`merchant:${merchantId}`, (err, reply) => {
        if (err) {
            console.error('Error retrieving pincodes:', err);
            callback(err, null);
        } else {
            callback(null, reply);
        }
    });
}

module.exports = getMerchantPincodes ;
