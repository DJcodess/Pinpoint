// routes/checkService.js
const express = require('express');
const redis = require('redis');

const router = express.Router();
const client = redis.createClient({
    host: "redis-19794.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 19794,
    username: "default",
    password: "866yos0r7TKGzG5zTfjJotIB5bAKFZac"
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
