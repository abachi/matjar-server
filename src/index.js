const express = require('express');
const path = require("path");
bodyParser = require('body-parser');
const app = express();
const StripeController = require('./controllers/StripeController');
const PORT = 4000;

// middleware
app.use(bodyParser.json())

app.post('/stripe/checkout', StripeController.checkout);

app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



