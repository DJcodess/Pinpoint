// routes/checkService.js
const express = require('express');
const redis = require('redis');

const router = express.Router();
const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASSWORD
});


client.on('error', (err) => {
    console.error('Redis error:', err);
});

// API endpoint to check if a pincode is serviced by a merchant
router.get('/:merchantId/:pincode', (req, res) => {
    const { merchantId, pincode } = req.params;

    // Check if the pincode exists in the set associated with the specified merchant ID
    client.sismember(`merchant:${merchantId}`, pincode, (err, reply) => {
        if (err) {
            console.error('Error checking pincode:', err);
            res.status(500).send('Error checking pincode');
        } else {
            if (reply === 1) {
                res.status(200).json({ serviced: true });
            } else {
                res.status(200).json({ serviced: false });
            }
        }
    });
});

module.exports = router;
