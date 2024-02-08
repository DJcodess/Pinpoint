// routes/setRedis.js
const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const redis = require('redis');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files
const client = redis.createClient({
    host: "redis-19794.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 19794,
    username: "default",
    password: "866yos0r7TKGzG5zTfjJotIB5bAKFZac"
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

// POST route to upload CSV file and set pincodes for a merchant
router.post('/:merchantId', upload.single('csvFile'), (req, res) => {

    const merchantId = req.params.merchantId;
    const csvFilePath = req.file.path;

    fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (row) => { // Process each row from the CSV
            const pincodeObject = row; // Extract the pincode object from the row
            //selecting pincode as the values (pincode values) of the pincode object
            console.log('Setting pincode: ', pincodeObject);
            let pincode = pincodeObject["pincode"];
            // Check if pincode is valid before adding to the set
            if (pincode) {
                client.sadd(`merchant:${merchantId}`, pincode, (err, reply) => {
                    if (err) {
                        console.error('Error adding pincode to set:', err);
                    } else {
                        console.log(`Pincode ${pincode} added to set for merchant ${merchantId}`);
                    }
                });
            } else {
                console.warn('Invalid pincode:', pincode);
            }
        })
        .on('end', () => {
            console.log('CSV processing complete');
            res.status(200).send('CSV processing complete, added the pincodes successfully');
            client.quit(); // Close Redis client after processing is complete
        })
        .on('error', (err) => {
            console.error('Error parsing CSV:', err);
            res.status(500).send('Error parsing CSV');
            client.quit(); // Close Redis client on error
        });
});

module.exports = router;
