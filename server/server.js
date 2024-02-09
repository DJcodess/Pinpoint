const express = require("express");
const mongoose = require("mongoose");
const envconfig = require("dotenv").config();
const productRoutes = require("./routes/product_routes");
const merchantRoutes = require("./routes/merchant_routes");
const pincodeRoutes = require("./routes/pincode_routes");
const redis = require('redis');
const quoteRoutes = require("./routes/quote_routes");

const app = express();
const port = process.env.PORT || 3001;

const CONNECTION_MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/testdb";

mongoose.connect(CONNECTION_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Opening MongoDB connection.
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
// For parsing JSON in req.body.
app.use(express.json());

// Home route.
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
});

// Mounting remaining routes.
app.use("/api/product", productRoutes);
app.use("/api/merchant", merchantRoutes);
app.use("/api/pincode", pincodeRoutes);
app.use("/api/quote", quoteRoutes);

// Function to close connection.
const closeMongoDBConnection = () => {
  mongoose.connection
    .close()
    .then(() => {
      console.log("Closing MongoDB connection due to app termination.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Error closing MongoDB connection:", err);
      process.exit(1);
    });
};

process.on("SIGINT", () => {
  closeMongoDBConnection();
});
process.on("SIGTERM", () => {
  closeMongoDBConnection();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
