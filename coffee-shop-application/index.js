
require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require('cors');
const path =require('path')
  
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));

app.get('/', (req, res) => {
  res.send('We are on HomePage')
});
require("./routes")(app);


//connect to mongodb
mongoose
  .connect("mongodb://localhost/coffeeshop", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));