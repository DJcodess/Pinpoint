// routes/setRedis.js
const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const redis = require('redis');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files

// import  { createClient } from 'redis';

// POST route to upload CSV file and set pincodes for a merchant
router.post('/:merchantId', upload.single('csvFile'), (req, res) => {
    const client = redis.createClient({
        host: '127.0.0.1',
        port: 6379,
        // password: 'password',
    });

    client.on('error', (err) => {
        console.error('Redis error:', err);
    });

    const merchantId = req.params.merchantId;
    const csvFilePath = req.file.path;

    fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (row) => {
            const pincode = row.pincode;
            client.set(`merchant:${merchantId}`, pincode, (err, reply) => {
                if (err) {
                    console.error('Error adding pincode to set:', err);
                } else {
                    console.log(`Pincode ${pincode} added to set for merchant ${merchantId}`);
                }
            });
        })
        .on('end', () => {
            console.log('CSV processing complete');
            res.status(200).send('CSV processing complete');
            client.quit(); // Close Redis client after processing is complete
        })
        .on('error', (err) => {
            console.error('Error parsing CSV:', err);
            res.status(500).send('Error parsing CSV');
            client.quit(); // Close Redis client on error
        });
});

module.exports = router;
