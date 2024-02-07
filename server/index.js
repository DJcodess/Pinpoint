const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to PinPoint server-side API");
});

// app.use('/api/products', require('./routes/products'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
