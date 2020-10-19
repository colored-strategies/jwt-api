const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//to read .env files
require("dotenv").config();

const logger = require("./utils/logger");

const app = express();
app.use(cors());
app.use(logger);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome my friend...");
});

//get product related routing information
require("./user/user.route")(app);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
