const express = require("express");
const redis = require("redis");
const multer = require("multer");
const csvParser = require("csv-parser");
const fs = require("fs");

const upload = multer({ dest: "/tmp" }); // Destination folder for uploaded files
const router = express.Router();
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASSWORD,
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});

// API endpoint to check if a pincode is serviced by a merchant.
router.get("/:merchantId/:pincode", (req, res) => {
  const { merchantId, pincode } = req.params;

  // Check if the pincode exists in the set associated with the specified merchant ID
  client.sismember(`merchant:${merchantId}`, pincode, (err, reply) => {
    if (err) {
      console.error("Error checking pincode:", err);
      res.status(500).send("Error checking pincode");
    } else {
      if (reply === 1) {
        res.status(200).json({ serviced: true });
      } else {
        res.status(200).json({ serviced: false });
      }
    }
  });
});

// API endpoint to get a list of all pincodes serviced by the merchant.
router.get("/:merchantId", (req, res) => {
  const merchantId = req.params.merchantId;
  client.smembers(`merchant:${merchantId}`, (err, reply) => {
    if (err) {
      console.error("Error fetching list of pincodes: ", err);
      res.status(500).send("Error fetching pincodes");
    } else {
      reply.sort();
      // console.log("reply: ", reply);
      res.status(200).json({pincodesList: reply});
    }
  });
});

// POST endpoint to append a single pincode to the merchant serviceability area.
router.post("/:merchantId/:pincode", (req, res) => {
  const merchantId = req.params.merchantId;
  const pincode = req.params.pincode;

  client.sadd(`merchant:${merchantId}`, pincode, (err, reply) => {
    if (err) {
      console.error("Error adding pincode to set:", err);
      res.status(500).send("Error adding pincode to set");
    } else {
      console.log(`Pincode ${pincode} added to set for merchant ${merchantId}`);
      res
        .status(200)
        .send(`Pincode ${pincode} added to set for merchant ${merchantId}`);
    }
  });
});

// POST endpoint to upload CSV file and set pincodes for a merchant.
router.post("/:merchantId", upload.single("csvFile"), (req, res) => {
  const merchantId = req.params.merchantId;
  const csvFilePath = req.file.path;

  fs.createReadStream(csvFilePath)
    .pipe(csvParser())
    .on("data", (row) => {
      // Process each row from the CSV
      const pincodeObject = row; // Extract the pincode object from the row
      //selecting pincode as the values (pincode values) of the pincode object
      console.log("Setting pincode: ", pincodeObject);
      let pincode = pincodeObject["pincode"];
      // Check if pincode is valid before adding to the set
      if (pincode) {
        client.sadd(`merchant:${merchantId}`, pincode, (err, reply) => {
          if (err) {
            console.error("Error adding pincode to set:", err);
            res.status(500).send("Error adding pincode to set");
          } else {
            console.log(
              `Pincode ${pincode} added to set for merchant ${merchantId}`
            );
          }
        });
      } else {
        console.warn("Invalid pincode:", pincode);
      }
    })
    .on("end", () => {
      console.log("CSV processing complete");
      res
        .status(200)
        .send("CSV processing complete, added the pincodes successfully");
    })
    .on("error", (err) => {
      console.error("Error parsing CSV:", err);
      res.status(500).send("Error parsing CSV");
    });
});

module.exports = router;
